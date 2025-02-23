import Home from './../../components/home'
import Projects from './../../components/project'
import About from './../../components/about'
import Photography from './../../components/photography'
import AOSWrapper from './../../components/AOSWrapper/';
import { Metadata } from 'next';

import picture from '@/assets/profile_me.jpg'

const files = {
  en: () => import('./../../data/en/page.json').then((module) => module.default),
  fr: () => import('./../../data/fr/page.json').then((module) => module.default),
}
const getData = async (locale: 'fr' | 'en') => files[locale]()

export default async function Page({
  params,
} : {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const lang = (await params).lang
  const data = await getData(lang)

  return (
    <AOSWrapper>
      <Home data={data.home} />
      <Projects data={data.work} />
      <Photography data={data.photography} />
      <About data={data.about} />
    </AOSWrapper>
  );
}

// ---
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