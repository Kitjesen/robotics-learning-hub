import React, { createContext, useState, useContext, useCallback } from 'react';
import { useToast } from "@/components/ui/use-toast"

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  read: boolean;
  emoji?: string;
  title?: string;
}

// Emoji mapping for different notification types
const NOTIFICATION_EMOJIS = {
  info: '💡',
  success: '✅',
  warning: '⚠️',
  error: '❌'
};

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'read'>) => void;
  markAsRead: (id: string) => void;
  clearNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { toast } = useToast();

  const addNotification = useCallback((notification: Omit<Notification, 'id' | 'read'>) => {
    const newNotification = {
      ...notification,
      id: Date.now().toString(),
      read: false,
      emoji: NOTIFICATION_EMOJIS[notification.type]
    };

    setNotifications(prev => [newNotification, ...prev]);

    // Show toast notification
    toast({
      title: notification.title || `New ${notification.type} notification`,
      description: notification.message,
      variant: notification.type === 'error' ? 'destructive' : 'default',
    });
  }, [toast]);

  const markAsRead = useCallback((id: string) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  }, []);

  const clearNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  }, []);

  const clearAllNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  return (
    <NotificationContext.Provider value={{ 
      notifications, 
      addNotification, 
      markAsRead, 
      clearNotification, 
      clearAllNotifications 
    }}>
      {children}
    </NotificationContext.Provider>
  );
};

