import GenericController from './GenericController';
import { HttpRequest, HttpResponse, Sender } from '../protocols';

class EmailManager extends GenericController {
  private readonly sender;

  constructor(sender: Sender) {
    super();
    this.sender = sender;
  }

  async post(httpRequest: HttpRequest): Promise<HttpResponse> {
    const { to, subject, text } = httpRequest.body;
    try {
      await this.sender.send(to, subject, text);
      return {
        status: 200,
        body: { message: 'Email sent succesfully' },
      };
    } catch {
      return {
        status: 400,
        body: { message: 'Failed to sent email' },
      };
    }
  }
}

export default EmailManager;
