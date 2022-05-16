import React from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import ModalOptOut from '@/organisms/ModalOptOut';
import { Wrapper, More } from './index.styles';
import { IDRParticipationControlViewProps } from './index.types';

const DRParticipationControlView = ({
  first,
  accept,
  onAccept,
  onDecline,
  modalOptOut,
  modalOptOutClose,
  modalOptOutOk,
  modalOptOutCancel,
}: IDRParticipationControlViewProps) => {
  const { t } = useTranslation('common');

  const renderRequestEvent = () => {
    return (
      <>
        <Button
          label={t('screens.main.savingsEvents.savingsEventsScreen.participationControl.confirm.accept')}
          borderRadius={100}
          backgroundColor={theme.colors.primary[100]}
          color={theme.colors.text[0]}
          fontSize={theme.typography.button.fontSize}
          width="150px"
          marginRight={20}
          height={40}
          onClick={onAccept}
        />
        <Button
          label={t('screens.main.savingsEvents.savingsEventsScreen.participationControl.confirm.decline')}
          borderRadius={100}
          borderColor={theme.colors.primary[100]}
          borderWidth={theme.borders.button.width}
          backgroundColor={theme.colors.text[0]}
          color={theme.colors.primary[100]}
          fontSize={theme.typography.button.fontSize}
          width="150px"
          marginLeft={20}
          height={40}
          onClick={onDecline}
        />
      </>
    );
  };

  const renderRequestEvent1 = () => {
    return (
      <Button transparent onClick={() => (accept ? onDecline() : onAccept())}>
        <More
          dangerouslySetInnerHTML={{
            __html: accept
              ? t('screens.main.savingsEvents.savingsEventsScreen.participationControl.decline')
              : t('screens.main.savingsEvents.savingsEventsScreen.participationControl.accept'),
          }}
        />
      </Button>
    );
  };
  return (
    <>
      <Wrapper>{first ? renderRequestEvent() : renderRequestEvent1()}</Wrapper>
      <ModalOptOut show={modalOptOut} onClose={modalOptOutClose} onOk={modalOptOutOk} onCancel={modalOptOutCancel} />
    </>
  );
};

export default DRParticipationControlView;
