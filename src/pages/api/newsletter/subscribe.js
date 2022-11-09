/* eslint-disable no-useless-escape */

export default async function handler(req, res) {
  const { NEXT_HUBSPOT_FORM_ID, NEXT_HUBSPOT_PORTAL_ID, NEXT_HUBSPOT_API_URL } = process.env;

  if (NEXT_HUBSPOT_FORM_ID && NEXT_HUBSPOT_PORTAL_ID && NEXT_HUBSPOT_API_URL) {
    if (req.method === 'POST') {
      // Validate request body
      if (!req.body.email) {
        res.status(400).send({ message: 'Missing email', status: 400 });
        return;
      }

      // Validate email
      const emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailRegex.test(req.body.email)) {
        res.status(400).send({ message: 'Invalid Email Address', status: 400 });
        return;
      }

      // Subscribe user
      await fetch(`${NEXT_HUBSPOT_API_URL}/${NEXT_HUBSPOT_PORTAL_ID}/${NEXT_HUBSPOT_FORM_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
          fields: [
            {
              name: 'email',
              value: req.body.email,
            },
          ],
        }),
      })
        .then((response) => {
          let data = {};
          if (response.status === 200) {
            data = {
              message: 'Subscription Successful',
              status: response.status,
            };
          } else if (response.status === 409) {
            data = {
              message: 'Email already subscribed',
              status: response.status,
            };
          } else {
            data = {
              message: 'Something went wrong',
              status: response.status,
            };
          }
          res.status(response.status).send(data);
        })
        .catch((error) => {
          res.status(500).send({ message: 'An error has occured, please try again', status: 500, ...error });
        });
    } else {
      res.status(405).send({ message: 'An error occurred', status: 405 });
    }
  } else {
    res.status(404).send({
      message: 'An error occurred',
      status: 404,
    });
  }
}
