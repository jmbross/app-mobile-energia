import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthTemplate from '@/templates/AuthTemplate';
import EnrollmentTemplate from '@/templates/EnrollmentTemplate';
import { ISelectUtilityScreenViewProps } from './index.types';
import SelectUtility from '@/organisms/SelectUtility';
import ModalNoPrograms from '@/organisms/ModalNoPrograms';

const SelectUtilityScreenView = ({
  onNext,
  disabledNext,
  modalNoPrograms,
  modalNoProgramsOk,
  utility,
}: ISelectUtilityScreenViewProps) => {
  const { t } = useTranslation('common');

  return (
    <AuthTemplate>
      <EnrollmentTemplate
        disabled={disabledNext}
        underline
        navigationPath={t('screens.enrollment.selectUtilityScreen.title')}
        onNext={onNext}
        textNext={t('common.generalButtons.next')}
      >
        <SelectUtility />
      </EnrollmentTemplate>
      <ModalNoPrograms show={modalNoPrograms} onOk={modalNoProgramsOk} utility={utility} />
    </AuthTemplate>
  );
};

export default SelectUtilityScreenView;
