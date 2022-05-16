import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/atoms/Radio';
import { Information } from './index.styles';
import { IConnectToUtilityViewProps } from './index.types';

const ConnectToUtilityView = ({ programName, utility, onChangeUtility }: IConnectToUtilityViewProps) => {
  const { t } = useTranslation('common');
  const utilities = t(`programs.${programName}.connectToUtilityScreen.utilities`, { returnObjects: true });

  // TODO: 첫번째 전력회사 선택 (기본 선택을 사용하지 않음)
  // const selectedUtility = Object.keys(Object.values(utilities)[0])[0];

  return (
    <>
      <Radio
        items={Object.values(utilities).map((key) => {
          return { id: Object.keys(key)[0], name: Object.keys(key)[0], text: Object.values(key)[0] };
        })}
        value={utility}
        onChange={(name) => onChangeUtility(name as string)}
      />
      <Information>{t(`programs.${programName}.connectToUtilityScreen.information`)}</Information>
    </>
  );
};

export default ConnectToUtilityView;
