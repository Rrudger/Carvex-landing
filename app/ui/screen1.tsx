'use client';

import { useState } from 'react';
import { useTransition } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { setUserLocale } from '../lib/locale';
import clsx from 'clsx';
import LogoAndTitle from '@/app/ui/logo';
import Projects from '@/app/ui/projects';

export default function Screen1() {

  const locale = useLocale();
  const t = useTranslations('screen1.menu');
  const startTransition = useTransition()[1];

  const menu = [t('commercial'), t('residental'), t('restoration'), t('contacts')];

  const handleSwitchLang = ():void => {
    const btn = document.getElementById('langBtn')!;
    btn.classList.remove('opacity-100');
    btn.classList.add('-translate-y-full', 'transform', 'transition-transform', 'duration-300');
    setTimeout(() => {
      btn.classList.add('opacity-0', 'transition-opacity');
    }, 150);
    setTimeout(() => {
      btn.classList.remove('opacity-0', '-translate-y-full')
      btn.classList.add('opacity-100');
      startTransition(() => {
        setUserLocale(locale === 'en' ? 'it' : 'en');
      });
    }, 450);
  }

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const open = ():void => {
    setOpenMenu(true);
    const [menu, menuBtn, bar1, bar2, bar3] = [
      document.getElementById('slideMenu')!,
      document.getElementById('menuBtn')!,
      document.getElementById('menu1bar')!,
      document.getElementById('menu2bar')!,
      document.getElementById('menu3bar')!
    ];
    bar1.classList.remove('bg-primary');
    bar1.classList.add('bg-accent_light', 'transform', 'transition-all', 'duration-300', 'md:-rotate-[22deg]', '-rotate-[34deg]', 'origin-top-right');
    bar2.classList.add('transform', 'transition-opacity', 'duration-300', 'opacity-0');
    bar3.classList.remove('bg-primary');
    bar3.classList.add('bg-accent_light', 'transform', 'transition-all', 'duration-300', 'md:rotate-[22deg]', 'rotate-[34deg]', 'origin-bottom-right');

    menu.classList.remove('hidden');
    menu.classList.remove('animate-[slideLeft_1s_linear_1]');
    menu.classList.add('animate-[slideRight_1s_linear_1]');

    setTimeout(() => {
      menuBtn.classList.add('md:scale-x-50');
    }, 300);
  };
  const close = ():void => {
    setOpenMenu(false);
    const [menu, menuBtn, bar1, bar2, bar3] = [
      document.getElementById('slideMenu')!,
      document.getElementById('menuBtn')!,
      document.getElementById('menu1bar')!,
      document.getElementById('menu2bar')!,
      document.getElementById('menu3bar')!
    ];
    menuBtn.classList.remove('md:scale-x-50');
    bar1.classList.remove('bg-accent_light', 'md:-rotate-[22deg]', '-rotate-[34deg]');
    bar1.classList.add('bg-primary');
    bar2.classList.remove('opacity-0')
    bar3.classList.remove('md:rotate-[22deg]', 'rotate-[34deg]');
    bar3.classList.add('bg-primary');


    menu.classList.remove('animate-[slideRight_1s_linear_1]');
    menu.classList.add('animate-[slideLeft_1s_linear_1]');
    setTimeout(() => {
      menu.classList.add('hidden');
    }, 1000);
  };
  const handleSwitchMenu = ():void => {
    if (openMenu) {
      close()
    } else {
      open()
    };
  };

  const handleReplay = ():void => {
    const video: HTMLVideoElement = (document.getElementById('mainVideo') as HTMLVideoElement);
    video.play();
  };


  return (
    <div className='relative w-screen h-screen overflow-hidden lg:grid grid-cols-10 flex flex-col'>

      <Projects />
      <div className='col-span-4 lg:h-full h-1/3'>
        <LogoAndTitle largeScrVisible={false} />

      </div>

      <div className='relative lg:h-full h-2/3 col-span-6 bg-accent/75 bg-linear-to-bl flex items-center'>
        <div className='relative w-full lg:h-2/3 h-full shadow-lg'>
          <video
            id='mainVideo'
            onClick={handleReplay}
            className='min-h-full min-w-full object-cover lg:object-center md:object-left object-center'
            autoPlay muted preload="none">
            <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>

        <LogoAndTitle largeScrVisible={true} />
      </div>

      <div
        id='slideMenu'
        className={`
          hidden absolute right-0 bg-primary opacity-[.95] shadow-lg
          lg:p-12 sm:p-8 p-4 lg:pr-[200px]
          text-accent_light lg:text-medium
          `}>
        {menu.map((item, index) => {
          return (
            <div key={index} className='lg:my-8 my-4'>
              {item}
            </div>
          )
        })}
      </div>

      <div className={clsx(`
        absolute right-0 flex flex-row
        lg:mt-12 lg:mr-8 md:mt-8 mt-4 md:mr-4 mr-0 pt-4`,
          {
            'transition-all duration-300 translate-x-[20px] -translate-y-[20px]': openMenu
          },
        )}>
        <button
          id='langBtn'
          onClick={handleSwitchLang}
          className={clsx(
              `text-medium text-shadow-lg font-black
              hover:scale-110 trasform transition-all duration-300
              mr-4 h-[35px] cursor-pointer`,
              {
                'text-primary': !openMenu,
                'text-accent_light': openMenu
              },
            )}>
          {locale}
        </button>

        <div id='menuBtn' onClick={handleSwitchMenu} className={`
          hover:scale-125 mr-4 trasform transition-all duration-300
          cursor-pointer sm:w-[60px] w-[40px] h-[35px] grid grid-cols-1
        `}>
          <div
            id='menu1bar'
            className={`
            h-[5px] w-full bg-primary mb-[4px]
          `}>
          </div>
          <div id='menu2bar' className={`
            h-[5px] w-full bg-primary mb-[4px]
          `}>
          </div>
          <div id='menu3bar' className={`
            h-[5px] w-full bg-primary mb-[4px]
          `}>
          </div>
        </div>
      </div>





    </div>
  )
}
