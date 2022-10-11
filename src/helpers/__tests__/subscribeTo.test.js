import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post('https://api.hubapi.com/contacts/v1/contact', async (req, res, ctx) => {
    const body = await req.json();
    if (body.email) {
      return res(
        ctx.status(200),
        ctx.json({
          message: 'Subscribed',
        })
      );
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          message: 'Please, email most be provided',
        })
      );
    }
  })
);

describe('subscribe to function', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => server.resetHandlers());

  it('should subscribe', async () => {
    const res = await fetch('https://api.hubapi.com/contacts/v1/contact', {
      method: 'POST',
      body: JSON.stringify({ email: 'damilolajerryhd@gmail.com' }),
    });

    const { message } = await res.json();
    const status = await res.status;
    expect(status).toBe(200);
    expect(message).toBe('Subscribed');
  });

  it('should fail if email is missing', async () => {
    const res = await fetch('https://api.hubapi.com/contacts/v1/contact', {
      method: 'POST',
      body: JSON.stringify({}),
    });

    const status = await res.status;
    expect(status).toBe(404);
  });
});
