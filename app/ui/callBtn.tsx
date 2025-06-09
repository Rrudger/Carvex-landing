import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function CallBtn({ screenSize }: { screenSize: string }) {
  const t = useTranslations('main');
  const [ btnState, setState ] = useState<string>('btn');

  if (screenSize === 'pc') {
    return (
      <div className='ml-[200px]'>
        <button
          className={`
            lg:block hidden
            rounded-full border border-4 border-primary text-primary font-bold
            text-small
            shadow-lg cursor-pointer
            px-4 py-2
            flex flex-row group
          `}>
          <p className='group-hover:hidden'>{t('callBtn')}</p>
          <p className='group-hover:block hidden'>{t('phoneNumber')}</p>
        </button>
      </div>
    )
  };

  return (
    <div className={`
      absolute top-0 lg:right-auto right-0
      lg:-translate-y-[100px] sm:-translate-y-[70px] -translate-y-[60px]
      ml-8 lg:mr-0 mr-8
      `}>
      <button
        onClick={() => btnState === 'btn' ? setState('number') : setState('btn')}
        className={`
          lg:hidden block
          rounded-full border border-4 border-primary text-primary font-bold
          text-extrasmall bg-accent_light/50
          shadow-lg cursor-pointer
          px-4 py-2
          flex flex-row group
        `}>
        <p className={btnState === 'btn' ? '' : 'hidden'}>{t('callBtn')}</p>
        <p className={btnState === 'btn' ? 'hidden' : ''}>{t('phoneNumber')}</p>
      </button>
    </div>
  )
};
