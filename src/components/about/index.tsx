import './about.scss'
import Image from 'next/image'
import profile from '@/assets/profile_me.jpg'

type Props ={
  data: {
    title: string;
    description: string;
  }
}

export default function About({ data }: Props) {
  return (
    <div className="about inside anchor-section" id="page-about">
      <div className="about-wrap">
      <div className='about-image'>
          <div className='about-image-wrap' data-aos="fade-up" data-aos-delay={200}>
            <Image
              src={profile}
              alt="Picture of the author"
              placeholder="blur" 
            />
          </div>
        </div>
        <div className='about-content'>
          <h2 className={'title title-md title--serif'} data-aos="fade-up">{ data.title }</h2>
          <div className='content' data-aos="fade-up" data-aos-delay={100} dangerouslySetInnerHTML={{ __html: data.description }}/>
        </div>
      </div>
    </div>
  )
}
