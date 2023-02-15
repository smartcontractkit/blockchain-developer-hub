import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import WalletModalBtn from '../WalletModalBtn';
import WalletConnectBtn from '../WalletConnectBtn';
import styles from './WalletBtn.module.css';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

const WalletBtn = () => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const dropdownListClasses = clsx(
    'wallet-adapter-dropdown-list',
    {
      'wallet-adapter-dropdown-list-active': active,
    },
    styles.dropdown_list
  );

  const base58 = useMemo(() => publicKey?.toBase58(), [publicKey]);

  const changeWallet = () => setVisible(true);

  const openDropdown = useCallback(() => {
    setActive(!active);
  }, [active]);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  useEffect(() => {
    const listener = (event) => {
      const node = ref.current;

      // Do nothing if clicking dropdown or its descendants
      if (!node || node.contains(event.target)) return;

      closeDropdown();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, closeDropdown]);

  return (
    <div
      className="wallet-adapter-dropdown"
      style={{ position: 'fixed', right: '20px', bottom: '20px', zIndex: '999999' }}
    >
      <button
        title={wallet ? wallet.adapter.name : 'disconnected'}
        style={{ color: 'white' }}
        onClick={openDropdown}
        className={styles.wallet_btn_dropdown}
      >
        {
          <img
            src={wallet ? wallet.adapter.icon : '/icons/disconnected.svg'}
            alt={`${wallet ? wallet.adapter.name : 'disconnected'}` + 'image'}
          />
        }
      </button>
      <ul aria-label="dropdown-list" className={dropdownListClasses} ref={ref} role="menu">
        {!wallet && (
          <WalletModalBtn className={clsx(styles.btn_connect, 'wallet-adapter-dropdown-list-item')} role="menuitem" />
        )}
        {!base58 && wallet && (
          <WalletConnectBtn className={clsx(styles.btn_connect, 'wallet-adapter-dropdown-list-item')} role="menuitem" />
        )}
        {wallet && base58 && (
          <>
            <li onClick={changeWallet} className="wallet-adapter-dropdown-list-item" role="menuitem">
              Change wallet
            </li>
            <li onClick={disconnect} className="wallet-adapter-dropdown-list-item" role="menuitem">
              Disconnect
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default WalletBtn;
