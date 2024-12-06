# 🤖 Robotics Learning Hub

<div align="center">

![Robotics Learning Hub](https://img.shields.io/badge/Robotics-Learning%20Hub-blue?style=for-the-badge&logo=robot)

[![Next.js](https://img.shields.io/badge/Next.js-13-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

🚀 Modern Open Source Robotics Learning Platform

</div>

## ✨ Features

- 🎓 **Interactive Learning**: Rich course resources and interactive learning experience
- 👥 **Community**: Active developer community and real-time communication
- 📚 **Resource Sharing**: High-quality learning materials and project examples
- 🛠️ **Project Collaboration**: Team collaboration and project management support
- 🌟 **Personalization**: Interest-based learning path recommendations
- 🔍 **Smart Search**: Powerful resource search and discovery
- 📊 **Progress Tracking**: Personal learning progress visualization
- 🤝 **Mentorship**: Connect learners with experienced mentors

## 🚀 Quick Start

### Prerequisites

- 📦 [Node.js](https://nodejs.org/) (v18+)
- 🐳 [Docker](https://www.docker.com/get-started)
- 🛠️ [Docker Compose](https://docs.docker.com/compose/install/)

### Docker Setup (Recommended)

1. 📥 Clone the repository
```bash
git clone https://github.com/your-username/robotics-learning-hub.git
cd robotics-learning-hub
```

2. ⚙️ Configure environment
```bash
# Copy environment variables file
cp .env.example .env

# Edit .env file with required variables
DATABASE_URL=your_database_url
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
```

3. 🏗️ Build and run
```bash
# Build Docker image
npm run docker:build

# Start services
npm run docker:start
```

4. 🌐 Access the application
Open [http://localhost:3000](http://localhost:3000) in your browser

### Local Development Setup

1. 📦 Install dependencies
```bash
npm install
```

2. 🗄️ Database setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

3. 🚀 Start development server
```bash
npm run dev
```

## 🛠️ Tech Stack

- **Frontend**
  - ⚛️ React 18
  - 📱 Next.js 13
  - 🎨 TailwindCSS
  - 📝 TypeScript

- **Backend**
  - 🔄 Next.js API Routes
  - 📊 Prisma ORM
  - 🔐 NextAuth.js

- **DevOps**
  - 🐳 Docker
  - 📦 npm
  - 🧪 ESLint

## 🤝 Contributing

We welcome all contributions! Please follow these steps:

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a pull request

## 🔧 Troubleshooting

### Docker Issues

1. 🔄 Rebuild
```bash
npm run docker:stop
npm run docker:build
npm run docker:start
```

2. 📋 View logs
```bash
docker-compose logs -f
```

3. 🧹 Clean up
```bash
# Stop all containers
docker-compose down

# Clean unused images and cache
docker system prune -a
```

### Development Issues

- 🔍 **TypeScript Errors**: Run `npm run build` for detailed error messages
- 🔒 **Permission Issues**: Ensure `.env` file contains all required variables
- 🌐 **API Connection**: Check network settings and environment variables

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

---

<div align="center">
  
Made with ❤️ by Robotics Learning Hub Team

</div>
