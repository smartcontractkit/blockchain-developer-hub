export default async function handler(req, res) {
    if (req.method === 'POST') {
          await fetch(`https://api.hubapi.com/contacts/v1/contact/?hapikey=${process.env.HUBSPOT_API_KEY}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({
                properties: 
                    [ { property: 'email', value: req.body.email }]
              })
          }).then(response => {
            res.status(response.status).send(response.json())
          }).catch(error => {
            res.status(500).send(error)
            });

    } else {
        res.status(405).send({ message: 'Only POST requests allowed' })
    }
  }
  