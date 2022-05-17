import styles from './ShareModal.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

const SOCIAL_MEDIA = [
  {
    name: 'Twitter',
    icon: '/logos/twitter.png',
    url: 'https://twitter.com/intent/tweet?url=',
  },

  {
    name: 'Facebook',
    icon: '/logos/facebook.png',
    url: 'https://www.facebook.com/sharer/sharer.php?u=',
  },
  {
    name: 'Reddit',
    icon: '/logos/reddit.png',
    url: 'https://www.reddit.com/submit?url=',
  },
  {
    name: 'LinkedIn',
    icon: '/logos/linkedIn.png',
    url: 'https://www.linkedin.com/shareArticle?url=',
  },
];
function ShareModal({ onClose, url }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(url);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  function handleClickOutside(event) {
    if (event.target.id === 'modal') {
      onClose();
    }
  }

  return (
    <div className={styles.container} onClick={handleClickOutside} id="modal">
      <div className={styles.content}>
        <button className={styles.closeBtn} onClick={onClose}>
          <img src="/icons/close.png" alt="Close" />
        </button>
        <h2>Share with community</h2>
        <p>and invite other to complete</p>
        <div className={styles.socialMedia}>
          {SOCIAL_MEDIA.map((socialMedia) => (
            <a
              href={socialMedia.url + url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialMedia__item}
              key={socialMedia.name}
            >
              <div className={styles.socialMedia__item__image}>
                <img src={socialMedia.icon} alt={socialMedia.name} />
              </div>
              {socialMedia.name}
            </a>
          ))}
        </div>

        <div className={styles.copyContainer}>
          <input type="text" value={url} disabled />
          <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
        </div>
      </div>
    </div>
  );
}

ShareModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

export default ShareModal;
