import './home.scss'
import LinkArrow from '../linkArrow'

type Props = {
  data: {
    heading_small: string;
    link: {
      url: string;
      title: string;
    }
  }
}

export default function Home({ data }: Props) {
  return (
    <div className="home page" id="page-home">
      <div className="home-content">
        <h1 className="title title--serif title-xl" dangerouslySetInnerHTML={{ __html: data.heading_small }} />
        <div className='home-link'><LinkArrow {...data.link} url="#page-project" aos={{ ['data-aos']: "fade-up", ['data-aos-delay']: 400, ['data-aos-offset']: 0 }} /></div>
      </div>
    </div>
  )
}