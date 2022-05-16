import { UnitType } from '@/types/index';
import { DefaultImage } from '@/types/images';

export interface IUsageProps {
  title?: string;
  value?: number | string;
  unit: UnitType;
  arrow?: string;
  description?: string;
  valueIcon?: DefaultImage;
  valueColor?: string;
  valueStrong?: boolean;
  descriptionColor?: string;
  valueSize?: number;
  valuePadding?: string;
}

export interface IStyleValue {
  color?: string;
  strong?: boolean;
  size?: number;
  padding?: string;
}
