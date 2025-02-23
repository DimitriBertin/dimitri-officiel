import './contact.scss'

type Props = {
  footer?: {
    copyright?: string;
    labelFooter?: string;
    email?: string;
    instagram?: string;
    spotify?: string;
    github?: string;
  }
}

export default function ContactPage({ footer }: Props) {
  return (
    <div className="contact inside" id="page-contact">
      <div className="contact-wrap-banner">
        <div className='contact-banner'>
          <p className="" data-aos="fade-up" data-aos-offset={0}><span>☺</span> <strong>{footer?.labelFooter}</strong></p>
          <a href={footer?.email} target='_blank' className='link-after' data-aos="fade-up" data-aos-delay={100} data-aos-offset={0}>Email</a>
          <a href={footer?.instagram} target='_blank' className='link-after' data-aos="fade-up" data-aos-delay={150} data-aos-offset={0}>Instagram</a>
          <a href={footer?.github} target='_blank' className='link-after' data-aos="fade-up" data-aos-delay={200} data-aos-offset={0}>Github</a>
          <a href={footer?.spotify} target='_blank' className='link-after' data-aos="fade-up" data-aos-delay={250} data-aos-offset={0}>Linkedin</a>
        </div>
        <p className='contact-copyright' data-aos="fade-up" data-aos-delay={300} data-aos-offset={0}>{footer?.copyright}</p>
      </div>
    </div>
  )
}
