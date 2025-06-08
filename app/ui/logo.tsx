import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

export default function LogoAndTitle({ largeScrVisible }: { largeScrVisible: boolean }) {
  const t = useTranslations('main');

  return (
    <div className={clsx(
        '',
        {
          'h-full w-1/4 lg:flex flex-col justify-between hidden absolute -inset-x-[325px]': largeScrVisible,
          'lg:hidden block': !largeScrVisible,
        },
      )}
    >
      <div className={`
        flex justify-start
        lg:mt-8 md:mt-8 mt-4 lg:ml-0 md:ml-8 ml-4 lg:mb-20
        `}>
        <Image
          className='md:size-[100px] size-[50px]'
          src="/logo.png"
          width='100'
          height='100'
          alt="company logo"
        />
      </div>

      <div className={`
        flex flex-col justify-start
        uppercase font-display lg:text-large md:text-largetablet text-largemobile text-primary font-black
        lg:mb-[250px] lg:mt-0 md:mt-4 mt-4
        `}>
        <p className='lg:pl-0 md:pl-8 pl-4'>
          {t('title1')}
        </p>
        <div className='flex'>
          <p className='overflow-visible text-white bg-accent/75 md:px-12 px-8 shadow-lg'>
            {t('title2')}
          </p>
        </div>
        <p className='lg:pl-0 md:pl-8 pl-4'>
          {t('title3')}
        </p>
      </div>
    </div>
  )
}
