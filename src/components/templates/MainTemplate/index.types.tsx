import { ReactNode } from 'react';

export interface IMainTemplateProps {
  children: ReactNode;
}

export interface IStyleLeft {
  hamburgerOpen: boolean;
}

export interface IMainTemplateViewProps extends IMainTemplateProps, IStyleLeft {}
