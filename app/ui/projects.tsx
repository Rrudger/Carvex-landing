import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import clsx from 'clsx';

export default function Projects() {
  const t = useTranslations('main');

  const [height, setHeight] = useState(0)
  useEffect(() => {
   setHeight(window.innerHeight)
 }, []);

  return (
    <div className={`
      absolute left-0 lg:flex hidden h-full flex-col justify-center
      text-small font-semibold
      `}>
      {['commercialSection', 'residentalSection', 'restorationSection'].map((rect) => {
        return (
          <div
            key={rect}
            className={clsx(
              'group relative cursor-pointer rotate-45 transition-rotate duration-300 hover:rotate-135 hover:z-50',
              {
                'text-primary': rect !== 'residentalSection',
                'text-accent_light': rect === 'residentalSection',
                'size-[300px]': height > 900,
                'size-[250px]': height > 750,
                'size-[200px]': height > 600,
              },
            )}>
            <div className={clsx(
              `absolute shadow-lg
              opacity-75 group-hover:opacity-100
              transition-trasform duration-300
              group-hover:-translate-x-[50px] group-hover:-translate-y-[50px]`,
                {
                  'bg-accent_light': rect === 'commercialSection',
                  'bg-primary': rect === 'residentalSection',
                  'bg-accent': rect === 'restorationSection',
                  'size-[300px]': height > 900,
                  'size-[250px]': height > 750,
                  'size-[200px]': height > 600,
                },
              )}>
            </div>
            <div className={`
              w-full h-full group-hover:h-auto
              flex items-center
              absolute top-0 right-0 py-4 px-4
              group-hover:-translate-x-[50px] group-hover:-translate-y-[50px]
              group-hover:rotate-180 group-hover:left-0 group-hover:text-center
              `}>
              <div className='w-full -rotate-45 group-hover:rotate-0 text-center group-hover:text-end'>
                <p className='group-hover:hidden'>~</p>
                <p className='my-4 group-hover:my-0'>{t(`${rect}`)}</p>
                <p className='group-hover:hidden'>~</p>
              </div>
            </div>
            <div
              className={clsx(
                `bg-primary flex justify-center items-center
                absolute overflow-hidden opacity-0
                group-hover:opacity-100 group-hover:-rotate-90`,
                  {
                    'size-[300px]': height > 900,
                    'size-[250px]': height > 750,
                    'size-[200px]': height > 600,
                  },
                )}>
              <Image
                className={`
                  min-w-[450px] -rotate-45
                `}
                src={`/${rect}.jpg`}
                width='700'
                height='700'
                alt="section image"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
