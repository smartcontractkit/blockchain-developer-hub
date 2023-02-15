import { useWallet } from '@solana/wallet-adapter-react';
import { useCallback, useMemo } from 'react';

const WalletConnectBtn = ({ ...props }) => {
  const { wallet, connect, connected, connecting } = useWallet();

  const handleClick = useCallback(() => {
    connect().catch(() => {});
  }, [connect]);

  const content = useMemo(() => {
    if (connecting) return 'Connecting ...';
    if (connected) return 'Connected';
    if (wallet) return 'Connect Wallet';
    return 'Connect Wallet';
  }, [connecting, connected, wallet]);

  return (
    <button {...props} onClick={handleClick}>
      {content}
    </button>
  );
};

export default WalletConnectBtn;
