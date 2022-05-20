/* eslint-disable no-useless-escape */

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Validate request body
    if (!req.body.email) {
      res.status(400).send('Missing email');
      return;
    }

    // Validate email
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(req.body.email)) {
      res.status(400).send('Invalid email');
      return;
    }

    // Subscribe user
    await fetch(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.HUBSPOT_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({
        properties: [{ property: 'email', value: req.body.email }],
      }),
    })
      .then((response) => {
        res.status(response.status).send(response.json());
        if (response.status === 200) {
          /*
           * The code below has been generated automatically by Github Copilot.
           * To be honest I wanna keep it because it looks useful and will save hours of searching in Hubspot docs
           * when we need to add this feature.
           */

          // Send confirmation email
          // fetch(`https://api.hubapi.com/email/public/v1/singleEmail/send?hapikey=${process.env.HUBSPOT_API_KEY}`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json',
          //   },
          //   redirect: 'follow',
          //   referrerPolicy: 'no-referrer',
          //   body: JSON.stringify({
          //     emailId: process.env.HUBSPOT_EMAIL_ID,
          //     to: req.body.email,
          //     mergeVars: {
          //       EMAIL: req.body.email,
          //     },
          //   }),
          // });

          res.status(200).send('Subscribed');
        } else {
          res.status(response.status).send('Something went wrong');
        }
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } else {
    res.status(405).send({ message: 'Only POST requests allowed' });
  }
}
