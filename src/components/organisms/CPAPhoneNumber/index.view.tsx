import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import Input from '@/atoms/Input';
import Img from '@/atoms/Img';
import { News, NewsText, Description } from './index.styles';

const CPAPhoneNumberView = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <News>
        <div>
          <Img src={images.checkboxCircle} />
        </div>
        <NewsText>{t('programs.cpa.phoneNumberScreen.news')}</NewsText>
      </News>
      <Description>{t('programs.cpa.phoneNumberScreen.description')}</Description>
      <Input
        type="text"
        border="underline"
        placeholder={t('common.validations.phone.placeholder')}
        fontSize={theme.typography.body.fontSize}
        onChangeText={() => console.log('')}
      />
    </>
  );
};

export default CPAPhoneNumberView;
