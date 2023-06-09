import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification tests', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Você recebeu uma solicitação de amizade'),
      category: 'Geral',
      recipientId: randomUUID(),
    });
    expect(notification).toBeTruthy();
  });
});
