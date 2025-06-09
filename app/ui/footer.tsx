import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { AtSymbolIcon, HomeModernIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { socials } from '@/app/lib/data';

export default function Footer() {
  const t = useTranslations('main');

  return (
    <div id='section3' className='w-full h-[300px] lg:grid grid-cols-12 flex flex-col md:gap-y-[24px] gap-y-4'>
      <div className='col-span-4 grid place-content-center'>
        <Image
          className='md:size-[200px] size-[150px]'
          src="/logo.png"
          width='200'
          height='200'
          alt="company logo"
        />
      </div>
      <div className='col-span-4 grid place-content-center lg:w-auto w-screen'>
        <div className='flex flex-col gap-y-4 lg:w-auto w-screen md:items-start items-center lg:pl-0 md:pl-8 pl-0'>
          <div className='flex flex-row gap-x-4 lg:w-auto md:w-1/2 sm:px-0'>
            <HomeModernIcon className='size-[24px] stroke-primary'/>
            <p className='text-primary lg:w-1/2'>{t('adress')}</p>
          </div>
          <div className='flex flex-row gap-x-4 lg:w-auto md:w-1/2'>
            <PhoneIcon className='size-[24px] stroke-primary'/>
            <p className='text-primary'>{t('phoneNumber')}</p>
          </div>
          <div className='flex flex-row gap-x-4 lg:w-auto md:w-1/2'>
            <AtSymbolIcon className='size-[24px] stroke-primary'/>
            <p className='text-primary'>{t('email')}</p>
          </div>
          <div className='flex flex-row gap-x-4 lg:w-auto md:w-1/2'>
            {socials.map((social) => {
              return (
                <Link key={social.icon} href={social.href}>
                  <Image
                    className='md:size-[24px] size-[16px] cursor-pointer'
                    src={`/icons/${social.icon}.svg`}
                    width='24'
                    height='24'
                    alt={`${social.icon} icon`}
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className='col-span-4 lg:pr-4 lg:pb-4'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1819.9653058679164!2d10.96613946142486!3d43.60623922482779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a6a89c8659c3d%3A0x53dc32a170f62e6a!2sViale%20Duca%20d&#39;Aosta%2C%2010B%2C%2050051%20Castelfiorentino%20FI!5e0!3m2!1sen!2sit!4v1748942363135!5m2!1sen!2sit"
          style={{width:"100%", height:"100%", border: "0"}}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </div>
  )
};
