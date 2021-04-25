import request from 'supertest';
import app from '../../../app';

const secretKey = process.env.SECRET_KEY;

describe('Content Type Middlware', () => {
  test('Should return json as default', async() => {
    app.get('/content_type', (req, res) => res.send({ message: 'hello' }));

    await request(app)
      .get('/content_type')
      .set('secret_key', secretKey)
      .expect('content-type', /json/);
  });

  test('Should return xml when type is set', async() => {
    app.get('/content_type_xml', (req, res) => {
      res.type('xml');
      res.send('');
    });

    await request(app)
      .get('/content_type_xml')
      .set('secret_key', secretKey)
      .expect('content-type', /xml/);
  });
});
