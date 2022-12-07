const { default: subscribeTo } = require('@/helpers/subscribeTo');
const { useState } = require('react');

const useSubscription = ({ email, setEmail }) => {
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('success');
  const [showNotification, setShowNotification] = useState(false);

  const resetNotification = () => {
    setShowNotification(false);
    setMessage('');
    setStatus('');
  };

  const sendSubscription = () => {
    setSending(true);
    subscribeTo({
      email: email,
    })
      .then((data) => data.json())
      .then((data) => {
        const { message, status: subStatus } = data;
        setMessage(message);
        setStatus(subStatus === 200 ? 'success' : 'fail');
        setShowNotification(true);
        setSending(false);
        if (subStatus === 200) {
          setEmail('');
        }
      });
    setTimeout(() => resetNotification(), 3000);
  };

  return [sendSubscription, sending, message, status, showNotification];
};

export default useSubscription;
