import styles from './Footer.module.css';
import clsx from 'clsx';
import Link from 'next/link';
import Logo from '@/icons/logo.svg';
import Notification from '@/components/Notification';
import { useState } from 'react';
import subscribeTo from '@/helpers/subscribeTo';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('success');
  const [sending, setSending] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const resetNotification = () => {
    setShowNotification(false);
    setMessage('');
    setStatus('');
  };

  const sendSubscription = () => {
    setSending(true);
    subscribeTo({ email: email })
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

  const handleInput = (e) => setEmail(e.target.value);

  const handleKeyPress = (e) => e.key === 'Enter' && email && sendSubscription();

  return (
    <footer className={styles.container}>
      <div className={styles.container_wrapper}>
        <div className={styles.footer_top}>
          <Link href="/">
            <a className={styles.logo}>
              <Logo />
            </a>
          </Link>
          <div>
            <h5 className={clsx('body-short-03', styles.footer_heading)}>Get our newsletter</h5>
            <div className={clsx('text-md--short', styles.footer_description)}>
              The latest content in the world of smart contract development – delivered straight to your inbox!
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <p className={clsx('text-md--short', styles.copyright)}>{new Date().getFullYear()} @Blockchain Education</p>
          <div className={styles.sub}>
            <input
              onChange={handleInput}
              onKeyUp={handleKeyPress}
              value={email}
              className={styles.sub_input}
              type="text"
              placeholder="Your Email Address"
            />
            <button
              onClick={sendSubscription}
              disabled={sending || !email}
              className={clsx(styles.sub_btn, 'body-short-03')}
            >
              {sending ? 'Sending...' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
      <Notification isActive={showNotification} message={message} type={status} />
    </footer>
  );
}

export default Footer;
