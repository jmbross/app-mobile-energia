import { images } from '@/assets/styles';

export const imageResouce = (type: string) => {
  const index = Object.keys(images).findIndex((key) => key === type);

  if (index >= 0) {
    return Object.values(images)[index];
  }

  return null;
};
