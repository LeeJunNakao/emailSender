import request from 'supertest';
import app from '../../../app';

const secretKey = process.env.SECRET_KEY;

describe('Auth Middleware - POST', () => {
  test('Should return 401 if secret key is not provided', async() => {
    app.post('/test_auth', (req, res) => res.status(200).send({ userId: req.body.userId }));

    await request(app)
      .post('/test_auth')
      .expect(401);
  });

  test('Should return 401 if secret key is invalid', async() => {
    app.post('/test_auth', (req, res) => res.status(200).send({ userId: req.body.userId }));

    await request(app)
      .post('/test_auth')
      .set('secret_key', 'invalid_token')
      .expect(401);
  });

  test('Should return 200 if secret key is valid', async() => {
    app.post('/test_auth', (req, res) => res.status(200).send());

    await request(app)
      .post('/test_auth')
      .set('secret_key', secretKey)
      .send()
      .expect(200);
  });
});
