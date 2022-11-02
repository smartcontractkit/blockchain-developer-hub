import NewsLetterTextContent from '@/components/NewsLetterTextContent';
import React, { useState } from 'react';
import styles from './HomepageNewsLetter.module.css';
import clsx from 'clsx';
import Notification from '@/components/Notification';
import useSubscription from '@/hooks/useSubscription';

export default function HomepageNewsLetter() {
  const [email, setEmail] = useState('');
  const [sendSubscription, sending, message, status, showNotification] = useSubscription({ email, setEmail });

  const handleInput = (e) => setEmail(e.target.value);

  const handleKeyPress = (e) => e.key === 'Enter' && email && sendSubscription();
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <NewsLetterTextContent isHomePage={true} />
        <div className={styles.sub}>
          <div className={styles.sub_container}>
            <input
              onChange={handleInput}
              onKeyUp={handleKeyPress}
              value={email}
              className={styles.sub_input}
              type="text"
              placeholder="Email Address"
            />
            <button
              onClick={sendSubscription}
              disabled={sending || !email}
              className={clsx(styles.sub_btn, 'body-short-03')}
            >
              {sending ? 'Sending...' : 'Subscribe'}
            </button>
          </div>
          <div className={clsx(styles.no_spam, 'body-short-02')}>No spam. Unsubscribe any time</div>
        </div>
      </div>
      <Notification isActive={showNotification} message={message} type={status} />
    </div>
  );
}
