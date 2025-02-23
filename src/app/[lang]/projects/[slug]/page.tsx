import projects from './../../../../data/projects.json'
import './single.scss'
import Image from 'next/image'
import Link from 'next/link'
import * as Blocks from '@/components/blocks'
import { VideoProps, ImageProps, ContentProps, ImagesProps } from '@/components/blocks/type'
import AOSWrapper from '@/components/AOSWrapper'
import picture from '@/assets/profile_me.jpg'
import { Metadata } from 'next'

export const dynamicParams = false

type Block = ContentProps | VideoProps | ImageProps | ImagesProps;

const files = {
  en: (slug: string) => import(`./../../../../data/en/project/${slug}.json`).then((module) => module.default),
  fr: (slug: string) => import(`./../../../../data/fr/project/${slug}.json`).then((module) => module.default),
}
const getData = async (locale: 'fr' | 'en', slug: string) => files[locale](slug)

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string; lang: 'en' | 'fr' }>
}) {
  const slug = (await params).slug
  const lang = (await params).lang

  const data = await getData(lang, slug)

  const activeIndex = projects.findIndex((item) => item.slug === slug)
  const nextProjectIndex = activeIndex + 1 >= projects.length ? 0 : activeIndex + 1
  const nextProject = projects[nextProjectIndex]

  return (
    <AOSWrapper>
      <div className='single'>
        <div className='inside'>
          <div className='wrap single-head'>
            <h1 className="title title--serif title-xl" data-aos="fade-up">{data.title}</h1>
            <p className='single-description' data-aos="fade-up" data-aos-delay={100}>{data.description}</p>
          </div>
          <div className='single-banner' data-aos="fade-up"  data-aos-delay={200}>
            <Image
              alt={data.banner.alt}
              src={data.banner.url}
              quality={100}
              width={data.banner.width}
              height={data.banner.width}
            />
            {data?.blocks[0].background && <div className='single-banner-after' style={{ background: data.blocks[0].background }}></div>}
          </div>
        </div>
        

        <div className='single-blocks'>
          { data.blocks.map((block: Block['data'], index: number ) => (
            <div className={`single-block single-block--${block.type}`} key={`${block.type}-${index}`} style={{ background: block.background }}>
              { block.type === 'video' && <Blocks.BlockVideo data={block} /> }
              { block.type === 'image' && <Blocks.BlockImage data={block} /> }
              { block.type === 'images' && <Blocks.BlockImages data={block} /> }
              { block.type === 'gallery' && <Blocks.BlockGallery data={block} /> }
              { block.type === 'content' && <Blocks.BlockContent data={block} /> }
              { block.type === 'spacer' && <Blocks.BlockSpacer /> }
            </div>
          ))}
        </div>
        <div className='single-next inside' data-aos="fade-up" data-aos-offset={0}>
          <Link href={`/${lang}/projects/${nextProject.slug}`} className='link-after title--serif title title-md'>{nextProject.title}</Link>
        </div>
      </div>
    </AOSWrapper>
  )
}

interface Params {
  slug: string;
  lang: string;
}

export async function generateStaticParams(): Promise<Params[]> {
  return projects.reduce((acc, item) => {
    acc.push({
      slug: item.slug,
      lang: 'fr',
    })

    acc.push({
      slug: item.slug,
      lang: 'en',
    })
    
    return acc
  }, [] as Params[])  
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr', slug: string; }>;
}): Promise<Metadata> {
  const slug = (await params).slug
  const lang = (await params).lang
  const data = await getData(lang, slug)

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
