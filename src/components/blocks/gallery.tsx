import './blocks.scss'
import { ImagesProps } from './type'
import Image from 'next/image'

export default function BlockGallery({ data }: ImagesProps) {
  return (
    <div className="block block-gallery">
      <div className='wrap gallery'>
        { data.images?.map((image, index) => (
          <figure className={'image'} key={`image-${index}`}>
            <Image
              alt={image.alt}
              src={image.sizes.small.url}
              quality={80}
              width={image.sizes.small.width}
              height={image.sizes.small.width}
              sizes="100vw"
            />
        </figure>
        ))}
      </div>
    </div>
  )
}