import EmailManager from './EmailManagerController';
import { Sender as ISender } from '../protocols';

const body = {
  to: 'email@email.com',
  subject: 'subject',
  text: 'email content',
};
class Sender implements ISender {
  async send(to: string, subject: string, text: string): Promise<void> {
    await new Promise(resolve => resolve(null));
  }
}

const makeSut = (): { sut: EmailManager, senderSut: Sender } => {
  const senderSut = new Sender();
  const sut = new EmailManager(senderSut);
  return { sut, senderSut };
};

describe('Email Manager Controller', () => {
  test('Should return 200', async() => {
    const { sut } = makeSut();
    const response = await sut.post({ body });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Email sent succesfully' });
  });

  test('Should return 400 if sender throws', async() => {
    const { sut, senderSut } = makeSut();
    jest.spyOn(senderSut, 'send').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
    const response = await sut.post({ body });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: 'Failed to sent email' });
  });
});
