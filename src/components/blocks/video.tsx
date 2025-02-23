import './blocks.scss'
import { VideoProps } from './type'

export default function BlockVideo({ data } : VideoProps ) {
  return (
    <div className="block block-video">
      {data.video && (
        <div className='video'>
          <video poster={data.video.poster} loop autoPlay muted>
            <source type="video/mp4" src={data.video.url} />
            Votre navigateur ne prend pas en charge la vidéo. 
          </video>
          { data.video.caption && <p className='caption' style={{ color: data.textcolor || 'currentcolor' }}>{data.video.caption}</p>}
        </div>
      )}
    </div>
  )
}