import clsx from 'clsx';
import './blocks.scss'
import Image from 'next/image'
import { ImageProps } from './type';

export default function BlockImage({ data }: ImageProps) {
  return (
    <div className={`block block-image block-image-simple`} 
    data-aos="fade-up"
    data-aos-delay={300}
    >
      { data.image && (
        <figure className={clsx(data.size && `image--${data.size}`, 'image')}>
          <Image
            alt={data.image.alt}
            src={data.image.url}
            quality={80}
            width={data.image.width}
            height={data.image.height}
            sizes="100vw"
          />
        { data.image.caption && <p className='caption' style={{ color: data.textcolor || 'currentcolor' }}>{data.image.caption}</p>}
        </figure>
      )}
    </div>
  )
}