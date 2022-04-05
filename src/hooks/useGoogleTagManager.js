import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const useGoogleTagManager = (trackingCode) => {
  useEffect(() => {
    if (trackingCode) {
      TagManager.initialize({ gtmId: trackingCode });
    }
  }, []);
};

export default useGoogleTagManager;
