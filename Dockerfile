# syntax=docker/dockerfile:1

# Base image for both development and production
FROM node:18-alpine AS base
RUN apk add --no-cache libc6-compat python3 make g++
WORKDIR /app

# Development stage
FROM base AS development
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
COPY . .
RUN npm run prisma:generate
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Dependencies stage
FROM base AS deps
COPY package*.json ./
RUN npm ci

# Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run prisma:generate
RUN npm run build

# Production stage
FROM base AS runner
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
