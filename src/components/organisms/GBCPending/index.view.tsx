import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { images } from '@/assets/styles';
import IconButton from '@/atoms/IconButton';
import { Wrapper, Container, Title, Description, Share, Buttons, ShareButton, ShareTitle } from './index.styles';
import { IGBCPendingViewProps } from './index.types';

const GBCPendingView = ({ email, programName, onEmail, onSms }: IGBCPendingViewProps) => {
  const { t } = useTranslation('common');

  const isEmail = i18next.exists(`common:programs.${programName}.dashboardScreen.pending.email`);
  const isSms = i18next.exists(`common:programs.${programName}.dashboardScreen.pending.sms`);

  return (
    <Wrapper>
      <Container>
        <Title>{t('screens.main.dashboard.dashboardScreen.pending.title')}</Title>
        <Description>{t(`programs.${programName}.dashboardScreen.pending.earn`)}</Description>
        <Share>{t('screens.main.dashboard.dashboardScreen.pending.shareLinkVia')}</Share>
        <Buttons>
          {isEmail && (
            <ShareButton>
              <IconButton
                icon={images.shareEmail}
                onClick={() =>
                  onEmail(
                    t(`programs.${programName}.dashboardScreen.pending.email.subject`),
                    t(`programs.${programName}.dashboardScreen.pending.email.body`, { email }),
                  )
                }
              />
              <ShareTitle>{t('screens.main.dashboard.dashboardScreen.pending.email')}</ShareTitle>
            </ShareButton>
          )}
          {isSms && (
            <ShareButton>
              <IconButton icon={images.shareSms} onClick={onSms} />
              <ShareTitle>{t('screens.main.dashboard.dashboardScreen.pending.sms')}</ShareTitle>
            </ShareButton>
          )}
        </Buttons>
      </Container>
    </Wrapper>
  );
};

export default GBCPendingView;
