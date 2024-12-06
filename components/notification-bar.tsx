import React from 'react';
import { useNotifications, Notification } from '@/contexts/notification-context';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const NotificationCard: React.FC<{
  notification: Notification;
  onClose: () => void;
  onClick: () => void;
}> = ({ notification, onClose, onClick }) => {
  const getBackgroundColor = () => {
    switch (notification.type) {
      case 'info':
        return 'hover:bg-blue-50 dark:hover:bg-blue-950/50';
      case 'success':
        return 'hover:bg-green-50 dark:hover:bg-green-950/50';
      case 'warning':
        return 'hover:bg-yellow-50 dark:hover:bg-yellow-950/50';
      case 'error':
        return 'hover:bg-red-50 dark:hover:bg-red-950/50';
      default:
        return 'hover:bg-gray-50 dark:hover:bg-gray-900/50';
    }
  };

  return (
    <Card 
      className={cn(
        "mb-2 transition-colors cursor-pointer",
        !notification.read && "border-l-4",
        notification.type === 'info' && "border-l-blue-500",
        notification.type === 'success' && "border-l-green-500",
        notification.type === 'warning' && "border-l-yellow-500",
        notification.type === 'error' && "border-l-red-500",
        getBackgroundColor()
      )}
      onClick={onClick}
    >
      <CardContent className="p-4 flex items-start gap-3">
        <span className="text-2xl" role="img" aria-label={notification.type}>
          {notification.emoji}
        </span>
        <div className="flex-1 min-w-0">
          {notification.title && (
            <h4 className="font-medium text-sm mb-1">{notification.title}</h4>
          )}
          <p className="text-sm text-muted-foreground">{notification.message}</p>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          ×
        </Button>
      </CardContent>
    </Card>
  );
};

export const NotificationBar: React.FC = () => {
  const { notifications, markAsRead, clearNotification, clearAllNotifications } = useNotifications();

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative h-8 w-8">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-sm">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
          <SheetDescription>
            Stay updated with the latest news and activities.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          {notifications.length > 0 && (
            <Button 
              onClick={clearAllNotifications} 
              variant="outline" 
              size="sm"
              className="w-full"
            >
              Clear All
            </Button>
          )}
          <ScrollArea className="h-[calc(100vh-200px)] pr-4">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <Bell className="h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground">No notifications</p>
              </div>
            ) : (
              <div className="space-y-2">
                {notifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onClose={() => clearNotification(notification.id)}
                    onClick={() => markAsRead(notification.id)}
                  />
                ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

