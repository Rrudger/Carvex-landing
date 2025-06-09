import { SetStateAction, Dispatch } from 'react';

export const switchImage = (
  direction: string,
  section: string,
  image: number,
  setImage: React.Dispatch<React.SetStateAction<number>>) => () => {
  const curImage = document.getElementById(`${section}Image`)!;
  if (direction === 'next') {
    console.log('next animation')
    setImage(image === 2 ? 0 : image + 1);
    curImage.classList.add('animate-[slideNext_1s_linear_1]')
    setTimeout(() => {
      curImage.classList.remove('animate-[slideNext_1s_linear_1]');
    }, 1000);
  } else {
    setImage(image === 0 ? 2 : image - 1);
    curImage.classList.add('animate-[slideRight_1s_linear_1]')
    setTimeout(() => {
      curImage.classList.remove('animate-[slideRight_1s_linear_1]');
    }, 1000);
  }
};
