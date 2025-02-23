import './photography.scss'
import Link from 'next/link'
import { BsArrowUpLeft } from "react-icons/bs";
import Image from 'next/image';
import clsx from 'clsx'
import picture from '@/assets/profile_me.jpg'

import AOSWrapper from './../../../components/AOSWrapper';
import { Metadata } from 'next';


const files = {
  en: () => import('./../../../data/en/photography.json').then((module) => module.default),
  fr: () => import('./../../../data/fr/photography.json').then((module) => module.default),
}
const getData = async (locale: 'fr' | 'en') => files[locale]()


export default async function Photography({
  params,
} : {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const lang = (await params).lang
  const data = await getData(lang)

  return (
    <AOSWrapper>
      <div className="photography-page inside">
        <Link href={`/${lang}#page-photography`} className='link link-back' data-aos="fade-up">
          <BsArrowUpLeft size={22} />
          {data.return}
        </Link>
          
        <div className='photography-page-content'  data-aos="fade-up" data-aos-delay={100}>
          <div className='content' dangerouslySetInnerHTML={{ __html: data.content }} />
        </div>
        {data.rows.map((row, index) => (
          <div className={clsx('photography-grid', row.type === 3 && 'photography-grid--3')} key={`photo-row-${index}`}>
            {row.images.map((image, i) => (
              <div className='photography-thumb' key={`photo-row-${index}-image-${i}`} data-aos="zoom-in" data-aos-delay={100 + i * 100}>
                <Image
                  src={`/assets/${image.formats.thumb.url}`}
                  width={image.formats.thumb.width}
                  height={image.formats.thumb.height}
                  alt={image.name}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </AOSWrapper>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>;
}): Promise<Metadata> {
  const lang = (await params).lang
  const data = await getData(lang)

  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.title_social || data.seo.title,
      description: data.seo.description_social || data.seo.description,
      url: data.seo.url,
      images: [
        {
          url: picture.src,
          width: 800,
          height: 600,
          alt: '',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.seo.title_social || data.seo.title,
      description: data.seo.description_social || data.seo.description,
      images: [picture.src],
    },
    icons: {
      icon : [
        { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon/favicon-16x16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon/favicon-32x32.png' },
      ],
      apple: '/favicon/apple-touch-icon.png',
      other: [{ rel: 'manifest', url: '/favicon/site.webmanifest' }],
    }
  };
}