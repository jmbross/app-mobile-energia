import React from 'react';
import { APP_STORE_LINK, GOOGLE_PLAY_LINK } from '@/constants/environment';
import WelcomeView from './index.view';

const WelcomeContainer = () => {
  const handleAppStore = () => {
    window.open(APP_STORE_LINK, '_blank');
  };

  const handleGooglePlay = () => {
    window.open(GOOGLE_PLAY_LINK, '_blank');
  };

  return <WelcomeView onClickAppStore={handleAppStore} onClickGooglePlay={handleGooglePlay} />;
};

export default WelcomeContainer;
