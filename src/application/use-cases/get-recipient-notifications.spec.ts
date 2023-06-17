import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotification } from './get-recipient-notifications';

describe('get recipient notifications', () => {
  it('should be able to get notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'rcptID1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'rcptID1' }),
        expect.objectContaining({ recipientId: 'rcptID1' }),
      ]),
    );
  });
});
