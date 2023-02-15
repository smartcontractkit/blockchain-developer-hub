import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import PropTypes from 'prop-types';
import { useCallback } from 'react';

const WalletModalBtn = ({ children, ...props }) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
};

WalletModalBtn.propTypes = {
  children: PropTypes.node,
};

WalletModalBtn.defaultProps = {
  children: 'Connect Wallet',
};

export default WalletModalBtn;
