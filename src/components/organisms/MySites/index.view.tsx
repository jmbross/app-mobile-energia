import React from 'react';
import { useTranslation } from 'react-i18next';
import { images, theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import InputText from '@/molecules/InputText';
import ModalProgramInformation from '@/organisms/ModalProgramInformation';
import ModalRemoveSite from '@/organisms/ModalRemoveSite';
import { Wrapper, Container, Address, Sites, EmptyContainer, Empty, Buttons } from './index.styles';
import { IMySitesProps } from './index.types';

const MySitesView = ({
  sites,
  siteId,
  siteName,
  siteAddress,
  siteProgram,
  disabledSave,
  onSiteClick,
  onProgramInfo,
  onChangeSiteName,
  onDelete,
  onSave,
  modalProgramInformation,
  modalProgramInformationClose,
  modalRemoveSite,
  modalRemoveSiteClose,
  modalRemoveSiteOk,
  modalRemoveSiteCancel,
}: IMySitesProps) => {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      {sites.length === 0 ? (
        <EmptyContainer>
          <Empty>{t('screens.main.settings.mySites.mySitesScreen.empty')}</Empty>
        </EmptyContainer>
      ) : (
        <Container>
          <Sites>
            {sites.map(({ id, name }) => (
              <Button
                key={id}
                label={name}
                fontSize={theme.typography.h2.fontSize}
                color={theme.colors.text[100]}
                backgroundColor={theme.colors.input.background}
                borderColor={siteId === id ? theme.colors.primary[75] : theme.colors.primary[25]}
                borderWidth={siteId === id ? 2 : 0}
                paddingTop={25}
                paddingBottom={25}
                paddingLeft={25}
                paddingRight={25}
                marginRight={30}
                width={240}
                align="left"
                onClick={() => onSiteClick(id)}
              />
            ))}
          </Sites>
          <Address>
            {t('screens.main.settings.mySites.mySitesScreen.title')}: {siteAddress}
          </Address>
          <InputText
            type="text"
            label={t('common.validations.siteNickname.title')}
            placeholder={t('common.validations.siteNickname.placeholder')}
            value={siteName}
            border="underline"
            onChangeText={onChangeSiteName}
          />
          <Buttons>
            <Button
              label={t('screens.main.settings.mySites.mySiteDetailScreen.program', { program: siteProgram })}
              fontSize={theme.typography.h5.fontSize}
              color={theme.colors.link.default}
              backgroundColor={theme.colors.input.background}
              marginTop={60}
              paddingTop={10}
              paddingBottom={10}
              paddingLeft={17}
              paddingRight={17}
              width={350}
              align="left"
              rightIcon={images.arrowRightBlue.image}
              onClick={onProgramInfo}
            />
            <Button
              label={t('screens.main.settings.mySites.mySiteDetailScreen.delete')}
              fontSize={theme.typography.title.fontSize}
              color={theme.colors.palette.highest}
              backgroundColor={theme.colors.input.background}
              marginTop={20}
              paddingTop={10}
              paddingBottom={10}
              paddingLeft={17}
              paddingRight={17}
              width={350}
              align="left"
              onClick={onDelete}
            />
            <Button
              disabled={disabledSave}
              label={t('common.generalButtons.save')}
              fontSize={theme.typography.button.fontSize}
              color={theme.colors.text[0]}
              backgroundColor={disabledSave ? theme.colors.primary[25] : theme.colors.primary[100]}
              borderRadius={30}
              borderColor={disabledSave ? theme.colors.primary[25] : theme.colors.primary[100]}
              borderWidth={2}
              marginTop={100}
              paddingLeft={20}
              paddingRight={20}
              paddingTop={5}
              paddingBottom={5}
              onClick={onSave}
            />
          </Buttons>
          <ModalProgramInformation
            programName={siteProgram}
            show={modalProgramInformation}
            onClose={modalProgramInformationClose}
          />
          <ModalRemoveSite
            show={modalRemoveSite}
            onClose={modalRemoveSiteClose}
            onOk={modalRemoveSiteOk}
            onCancel={modalRemoveSiteCancel}
          />
        </Container>
      )}
    </Wrapper>
  );
};

export default MySitesView;
