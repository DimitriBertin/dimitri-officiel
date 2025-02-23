'use client'

import './project.scss'
import Link from 'next/link'
import Image from 'next/image';
import { useParams } from 'next/navigation';

type Props = {
  data: {
    title: string;
    description: string;
    labelBottom: string;
    label: string;
    link: string;
    items: {
      slug: string;
      title: string;
      description: string;
      picture: {
        url: string;
        width: number;
        height: number;
        alt: string;
      }
    }[]
  }
}

export default function Project({ data }: Props) {
  const params = useParams();

  return (
    <div className="project anchor-section" id="page-project">
      <div className='project-content inside'>
        <div className='project-left'>
          <h2 className='title title-md title--serif' data-aos="fade-up">{data.title}</h2>
          <div className='content' data-aos="fade-up" data-aos-delay={100} dangerouslySetInnerHTML={{ __html: data.description }} />
        </div>
        <div className='project-right'>
          <Link href={`/${params?.lang}${data.link}`} className='link link-after' data-aos="fade-up" data-aos-delay={200}>{data.label}</Link>
        </div>
      </div>
      <div className='project-grid inside'>
        {data.items.map((item, index) => (
          <Link href={`/${params?.lang}/projects/${item.slug}`} className='project-item' key={`${item.title}-${index}`} data-aos="fade-up" data-aos-delay={300 + (index * 100 )}>
            <div className='project-item-bkg'>
                <Image
                  src={item.picture.url}
                  width={item.picture.width}
                  height={item.picture.height}
                  alt={item.picture.alt}
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
      <div className='project-link inside' data-aos="fade-up">
        <Link href={`/${params?.lang}${data.link}`} className='link link-after'>{data.labelBottom}</Link>
      </div>
    </div>
  )
}