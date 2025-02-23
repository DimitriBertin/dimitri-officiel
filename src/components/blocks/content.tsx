import './blocks.scss'

import { ContentProps } from './type'

export default function BlockContent({ data }: ContentProps) {
  return (
    <div className="block block-content">
      <div className='inside'>
        { data.content && <div className={`content wrap richtext--${data.align || 'center'}`} style={{ color: data.textcolor || '#444' }} dangerouslySetInnerHTML={{ __html: data.content }} data-aos="fade-up" />}
      </div>
    </div>
  )
}

	