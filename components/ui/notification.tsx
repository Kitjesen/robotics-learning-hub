import React from 'react';
import { X } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const notificationVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        info: "border-blue-200 text-blue-800 dark:border-blue-400 dark:text-blue-300",
        success: "border-green-200 text-green-800 dark:border-green-400 dark:text-green-300",
        warning: "border-yellow-200 text-yellow-800 dark:border-yellow-400 dark:text-yellow-300",
        error: "border-red-200 text-red-800 dark:border-red-400 dark:text-red-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface NotificationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationVariants> {
  onClose?: () => void;
}

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ className, variant, onClose, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(notificationVariants({ variant }), className)}
        {...props}
      >
        {children}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        )}
      </div>
    )
  }
);
Notification.displayName = "Notification";

export { Notification, notificationVariants };

