import React from 'react';
import { useTranslation } from 'react-i18next';
import { images } from '@/assets/styles';
import Img from '@/atoms/Img';
import Button from '@/atoms/Button';
import ModalProgramInformation from '@/organisms/ModalProgramInformation';
import { Wrapper, Container, Logo, Program, Arrow } from './index.styles';
import { IProgramInformationViewProps } from './index.types';

const ProgramInformationView = ({
  programName,
  modalProgramInformation,
  modalProgramInformationClose,
  onHelp,
}: IProgramInformationViewProps) => {
  const { t } = useTranslation('common');

  const logo = () => {
    if (programName === 'scp') {
      return images.logoSCP;
    }

    if (programName === 'cpa') {
      return images.logoCPA;
    }

    return images.logoOlivineGreen;
  };

  return (
    <>
      <Button transparent width="100%" onClick={onHelp}>
        <Wrapper>
          <Container>
            <Logo>
              <Img src={logo()} />
            </Logo>
            <Program>{t(`programs.${programName}.title`)}</Program>
            <Arrow>
              <Img src={images.arrowRightGreen} />
            </Arrow>
          </Container>
        </Wrapper>
      </Button>
      <ModalProgramInformation show={modalProgramInformation} onClose={modalProgramInformationClose} />
    </>
  );
};

export default ProgramInformationView;
