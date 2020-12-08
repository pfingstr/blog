import Link from 'next/link'
import Layout from '../components/Layout'
import posts from '../../public/data/posts.json'
import Select from 'react-select'
import Tile from '../components/Tile'


function PostSearch() {
  const dropdownItems = posts.map(opt => ({ label: opt.title, value: opt.slug }));
  return(  
      <div className="container">
        <div className="blog-search" >
          <Select
              onChange={opt => window.location.href = "/blog/" + opt.value}
              placeholder={'Search Posts'}
              menuPlacement="auto"
              menuPosition="right"
              options={dropdownItems} />
        </div>
        </div>
  )
}

export default function Blog({ posts = [] }) {
  const hero = posts[0]
  return (
    <Layout title='Blog'>
      <div className="tile"><PostSearch /></div>
      
      <Link href='/blog/[slug]' as={`/blog/${hero.slug}`}>
      <div className='hero-image' style={{ backgroundImage:`url(${hero.coverImage})` }}>
      <a className='tile-block'>
          <h2 className='title'>{hero.title}</h2>
          <em className='subtitle is-5 is-block'>{hero.dateFormatted}</em>
        </a>
      </div>
      </Link>
      <div className='grid-two-column'>
      {posts.slice(1).map((post) => (
          <Tile key={post.slug} {...post} />
        ))}
        </div>
        
        
    </Layout>
    
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts
    }
  }
}
