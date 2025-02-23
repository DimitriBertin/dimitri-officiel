import './blocks.scss'
import { ImagesProps } from './type'
import Image from 'next/image'
import clsx from 'clsx'

export default function BlockImages({ data }: ImagesProps) {
  
  return (
    <div className={clsx('block block-images', data.size === 'inside' && 'inside')}>
      <div className="images">
          {data.images && data.images.map((image, index) => (
            <figure className={clsx('image', image.type === 'none' && 'image-none')} key={`image-${index}`}>
              <Image
                alt={image.alt}
                src={image.url}
                quality={80}
                width={image.width}
                height={image.height}
                sizes="100vw"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              />
              { image.caption && <p className='caption' style={{ color: data.textcolor || 'currentcolor' }}>{image.caption}</p>}
          </figure>
        ))}
      </div>
    </div>
  )
}