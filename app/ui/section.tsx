'use client';
import { SetStateAction, Dispatch } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export default function Section({ section, index, image, setImage }: {
  section: string,
  index: number,
  image: number,
  setImage: React.Dispatch<React.SetStateAction<number>>
}) {
  const t = useTranslations('main');
  const toRight = (index & 1) !== 1;
  const handeSwitchImage = (direction: string) => () => {
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
  }

  return (
    <div id={`section${index}`} className='lg:p-20 md:px-20 px-4 py-12'>
      <div className={clsx('flex flex-col',
          {
            'lg:flex-row': toRight,
            'lg:flex-row-reverse': !toRight
          },
        )}>
        <div className={clsx('lg:w-1/2 flex flex-col justify-end lg:px-8 lg:pb-0 pb-4',
            {
              'border-l pl-4': toRight,
              'border-r pr-4': !toRight
            },
          )}>
          <h2 className='md:text-medium text-small font-light tracking-wide uppercase mb-4'>
            {t(`${section}Section`)}
          </h2>
          <p className='lg:w-2/3 text-base tracking-wide text-grey font-extralight'>
            {t(`${section}SectionDescription`)}
          </p>
        </div>
        <div className='lg:w-1/2 relative'>
          <Image
            id={`${section}Image`}
            className=''
            src={`/${section}/${image}.jpg`}
            width='1100'
            height='700'
            alt="commercail furniture section image"
          />
          <Image
            onClick={handeSwitchImage('prev')}
            className='absolute top-1/2 md:size-[40px] size-[24px] md:ml-4 ml-2 cursor-pointer'
            src={`/icons/chevronLeft.svg`}
            width='40'
            height='40'
            alt="previous image"
          />
          <Image
            onClick={handeSwitchImage('next')}
            className='absolute top-1/2 md:size-[40px] size-[24px] right-0 md:mr-4 mr-2 cursor-pointer rotate-180'
            src={`/icons/chevronLeft.svg`}
            width='40'
            height='40'
            alt="next image"
          />
        </div>
      </div>

      <div className={clsx('flex items-center my-8',
          {
            'flex-row': toRight,
            'flex-row-reverse': !toRight
          },
        )}>
        <div className='lg:text-medium md:w-auto w-1/3 font-light tracking-wide uppercase'>
          {t('contactUs')}
        </div>
        <hr className='grow lg:mx-8 md:mx-4 mx-2'/>
        <button className={`
          border border-primary text-primary md:text-extrasmall text-[14px] lg:p-4 p-2 cursor-pointer uppercase
          `}>
            <Link href={`#section3`}>
              {t('contactUsBtn')}
            </Link>
        </button>
      </div>
    </div>

)
}
