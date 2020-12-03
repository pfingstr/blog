import Link from 'next/link'

const Tile = ({ title, dateFormatted, slug, coverImage }) => (
    <div>
      <Link href='/blog/[slug]' as={`/blog/${slug}`}>
    <div className='tile-image' style={{backgroundImage:`url(${coverImage})`}}>
      
        <a className='tile-block'>
          <h2 className='title'>{title}</h2>
          <em className='subtitle is-5 is-block'>{dateFormatted}</em>
        </a>
  
 </div></Link>
 </div>
)

export default Tile


