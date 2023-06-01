import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        content: notification.content.value,
        category: notification.category,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
        recipientId: notification.recipientId,
      },
    });
  }
}