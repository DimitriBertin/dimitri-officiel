
import './photography.scss'
import Image from 'next/image'
import LinkArrow from '../linkArrow'

type Props = {
  data: {
    title: string;
    content: string;
    link: {
      url: string;
      title: string;
    };
    featured: {
      url: string;
      name: string;
      width: number;
      height: number;
      formats: {
        thumb: {
          url: string;
          width: number;
          height: number;
        },
        large: {
          url: string;
          width: number;
          height: number;
        }
      }
    }[];
  }
}

export default function Photography({ data }: Props) {
  return (
    <div className="photography anchor-section" id="page-photography">
      <div className="photography-wrap">
        <div className='photography-content inside'>
          <h2 className={'title title-md title--serif'} data-aos="fade-up">{data.title}</h2>
          <div className='content'  data-aos="fade-up" data-aos-delay={100} dangerouslySetInnerHTML={{ __html: data.content }} />
          <LinkArrow {...data.link} aos={{ ['data-aos']: "fade-up", ['data-aos-delay']: 200}} />
        </div>
        <div className='photography-images'>
          {data.featured.map((item, index) => (
            <div className='photograpghy-image' key={`photo-${index}`} data-aos="fade-up" data-aos-delay={400 + (index * 100)}>
              <Image
                src={`/assets/${item.formats.large.url}`}
                width={item.formats.large.width}
                height={item.formats.large.height}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}