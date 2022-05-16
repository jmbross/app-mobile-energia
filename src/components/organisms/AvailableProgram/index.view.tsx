import React from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Checkbox from '@/atoms/Checkbox';
import { Description, AgreeBox, Terms, More } from './index.styles';
import { IAvailableProgramViewProps } from './index.types';

const AvailableProgramView = ({ program, agree, onChangeAgree }: IAvailableProgramViewProps) => {
  const { t } = useTranslation('common');

  const isTerms = i18next.exists(`common:programs.${program}.availableProgramScreen.terms`);
  const isMore = i18next.exists(`common:programs.${program}.availableProgramScreen.more`);

  return (
    <div>
      <Description dangerouslySetInnerHTML={{ __html: t(`programs.${program}.availableProgramScreen.description`) }} />
      {isTerms && (
        <AgreeBox>
          <Checkbox items={[{ id: 1, name: 1, text: '' }]} values={[agree ? 1 : 0]} onChange={onChangeAgree} />
          <Terms dangerouslySetInnerHTML={{ __html: t(`programs.${program}.availableProgramScreen.terms`) }} />
        </AgreeBox>
      )}
      {isMore && <More dangerouslySetInnerHTML={{ __html: t(`programs.${program}.availableProgramScreen.more`) }} />}
    </div>
  );
};

export default AvailableProgramView;
