import React from 'react';
import OriginModal from 'react-modal';
import { images, theme } from '@/assets/styles';
import Button from '@/atoms/Button';
import IconButton from '@/atoms/IconButton';
import { IModalProps } from './index.types';
import { Overlay, Container, Header, Title, More, Body, Footer } from './index.styles';

const Modal = ({
  children,
  show,
  title,
  textOk,
  textCancel,
  showClose,
  onClose,
  onOk,
  onCancel,
  disabledOk,
}: IModalProps) => {
  return (
    <OriginModal
      appElement={document.getElementById('root') as HTMLElement}
      isOpen={show}
      onRequestClose={onClose}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          background: '#fff',
          overflow: 'initial',
          outline: 'none',
        },
      }}
    >
      <Overlay>
        <Container>
          <Header>
            {title && <Title>{title}</Title>}
            {showClose && (
              <More>
                <IconButton icon={images.modalClose.image} onClick={onClose} />
              </More>
            )}
          </Header>
          <Body>{children}</Body>
          <Footer>
            {textOk && textOk !== '' && onOk && (
              <Button
                disabled={disabledOk}
                label={textOk}
                borderRadius={100}
                backgroundColor={disabledOk ? theme.colors.primary[25] : theme.colors.primary[100]}
                color={theme.colors.text[0]}
                fontSize={theme.typography.button.fontSize}
                width="100%"
                height={50}
                onClick={onOk}
              />
            )}
            {textCancel && textCancel !== '' && onCancel && (
              <Button
                label={textCancel}
                borderRadius={100}
                borderColor={theme.colors.primary[100]}
                borderWidth={theme.borders.button.width}
                backgroundColor={theme.colors.text[0]}
                color={theme.colors.primary[100]}
                fontSize={theme.typography.button.fontSize}
                width="100%"
                height={50}
                marginTop={20}
                onClick={onCancel}
              />
            )}
          </Footer>
        </Container>
      </Overlay>
    </OriginModal>
  );
};

export default Modal;
