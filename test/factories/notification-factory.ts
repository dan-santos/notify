import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { randomUUID } from 'node:crypto';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'test',
    content: new Content('mocked notification'),
    recipientId: randomUUID(),
    ...override,
  });
}
