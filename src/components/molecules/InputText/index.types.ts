import { IInputProps } from '@/atoms/Input';
import { IInputFrameProps } from '@/molecules/InputFrame';

export interface IInputTextProps extends Omit<IInputFrameProps, 'children'>, IInputProps {}
