import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '@/atoms/Radio';
import { Description, RadioGroup } from './index.styles';

const CPAProgramListView = () => {
  const { t } = useTranslation('common');
  const programs = t('programs.cpa.programListScreen.programs', { returnObjects: true });

  // 첫번째 프로그램 선택 (기본 선택을 사용하지 않음)
  // const selectedProgram = Object.keys(Object.values(programs)[0])[0];

  return (
    <>
      <Description>{t('screens.enrollment.programListScreen.description')}</Description>
      <RadioGroup>
        <Radio
          items={Object.values(programs).map((program) => {
            return { id: Object.keys(program)[0], name: Object.keys(program)[0], text: Object.values(program)[0] };
          })}
          value={0}
          onChange={(name, text) => console.log(name, text)}
        />
      </RadioGroup>
    </>
  );
};

export default CPAProgramListView;
