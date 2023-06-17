import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipient notifications', () => {
  it('should be able to count notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rcptID1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rcptID1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rcptID2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'rcptID1',
    });

    expect(count).toStrictEqual(2);
  });
});
