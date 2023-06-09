import { Notification as RawNotification } from '@prisma/client';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';

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

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        cancelledAt: raw.cancelledAt,
        createdAt: raw.createdAt,
        readAt: raw.readAt,
      },
      raw.id,
    );
  }
}
