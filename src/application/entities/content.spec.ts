import { Content } from './content';

describe('Notification content tests', () => {
  it('should be able to create notification content', () => {
    expect(new Content('Você recebeu uma solicitação de amizade')).toBeTruthy();
  });

  it('should NOT be able to create notification without at least 5 characters', () => {
    expect(() => new Content('Você')).toThrowError();
  });

  it('should NOT be able to create notification with more than 240 characters', () => {
    expect(() => new Content('A'.repeat(241))).toThrowError();
  });
});
