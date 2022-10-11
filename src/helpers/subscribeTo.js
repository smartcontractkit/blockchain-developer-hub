const subscribeTo = async (data) => {
  const res = fetch('api/newsletter/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return res;
};

export default subscribeTo;
