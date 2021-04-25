import request from 'supertest';
import app from '../../../app';

const secretKey = process.env.SECRET_KEY;

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async() => {
    app.post('/test_body_parse', (req, res) => res.json(req.body));

    await request(app)
      .post('/test_body_parse')
      .send({ content: 'test' })
      .set('secret_key', secretKey)
      .expect({ content: 'test' });
  });
});
