import React from 'react';
import { useTranslation } from 'react-i18next';
import LocationSetup from '@/organisms/LocationSetup';
import ModalZipcode from '@/organisms/ModalZipcode';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { ILocationSetupScreenViewProps } from './index.types';
import ModalNoPrograms from '@/organisms/ModalNoPrograms';

const LocationSetupScreenView = ({
  onNext,
  disabledNext,
  modalZipcode,
  modalZipcodeClose,
  modalZipcodeOk,
  modalZipcodeCancel,
  modalNoPrograms,
  modalNoProgramsOk,
}: ILocationSetupScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationPath={t('screens.enrollment.locationSetupScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <LocationSetup />
      </EnrollmentTemplate>
      <ModalZipcode
        show={modalZipcode}
        onClose={modalZipcodeClose}
        onOk={modalZipcodeOk}
        onCancel={modalZipcodeCancel}
      />
      <ModalNoPrograms show={modalNoPrograms} onOk={modalNoProgramsOk} />
    </AuthTemplate>
  );
};

export default LocationSetupScreenView;
