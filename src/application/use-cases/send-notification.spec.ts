import { randomUUID } from 'node:crypto';
import { SendNotification } from './send-notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'Você recebeu uma solicitação de amizade',
      category: 'Geral',
      recipientId: randomUUID(),
    });

    expect(notificationsRepository.notifications[0]).toStrictEqual(
      notification,
    );
  });
});
