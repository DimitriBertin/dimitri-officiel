import './page.scss'
import Link from 'next/link'
import { BsArrowUpLeft } from "react-icons/bs";
import projects from '@/data/projects.json'
import Image from 'next/image';
import AOSWrapper from './../../../components/AOSWrapper';
import { Metadata } from 'next';
import picture from '@/assets/profile_me.jpg'

const files = {
  en: () => import('./../../../data/en/projects.json').then((module) => module.default),
  fr: () => import('./../../../data/fr/projects.json').then((module) => module.default),
}
const getData = async (locale: 'fr' | 'en') => files[locale]()


export default async function Page({
  params,
} : {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const lang = (await params).lang
  const data = await getData(lang)

  // const data = await getData(lang)
    
  return (
    <AOSWrapper>
      <div className="projects-page inside">
        <div className='projects-page-content'>
          <h1 className='title title-xl title--serif' data-aos="fade-up">{data.title}</h1>
          <div className='content' dangerouslySetInnerHTML={{__html: data.description }} data-aos="fade-up" data-aos-delay={100}></div>
          <Link href={`/${lang}#page-projects`} className='link link-back' data-aos="fade-up" data-aos-delay={200}>
            <BsArrowUpLeft size={22} />
            {data.return}
          </Link>
        </div>
        <div className='project-grid'>
          {projects.map((item, index) => (
            <Link href={`/${lang}/projects/${item.slug}`} className='project-item' key={`${item.title}-${index}`} data-aos="fade-up" data-aos-delay={200 + index * 100}>
              <div className='project-item-bkg'>
                  <Image
                    src={item.banner}
                    width={800}
                    height={600}
                    alt={item.title}
                    quality={100}
                  />
              </div>
              <h3 className='project-title'>
                <strong className=''>{ item.title }</strong>
                <span className='project-description'>{ item.description }</span>
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </AOSWrapper>
  );
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
