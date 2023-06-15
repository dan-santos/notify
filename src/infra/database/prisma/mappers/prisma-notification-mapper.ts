import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      readAt: notification.readAt,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt ?? new Date(),
    };
  }
}
