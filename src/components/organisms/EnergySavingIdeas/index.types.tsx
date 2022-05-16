import { DefaultImage } from '@/types/images';
import { TargetDirectionEnum } from '@/types/dr';

export type IdeaTabType = {
  id: string;
  title: string;
  active: DefaultImage;
  deactive: DefaultImage;
};

export interface IEnergySavingIdeasViewProps {
  tabs: IdeaTabType[];
  selected: string;

  // TODO: 통신후 작업해햐함 (임시용)
  targetDirection?: TargetDirectionEnum;
  onClick: (value: string) => void;
}
