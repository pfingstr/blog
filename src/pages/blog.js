import Link from 'next/link'
import Layout from '../components/Layout'
import posts from '../../public/data/posts.json'
import Select from 'react-select';

const stuff = posts.map(opt => ({ label: opt.title, value: opt.slug }));

export default function Blog({ posts = [] }) {
  return (
    <Layout title="Blog">
      <h1 className="title">Blog</h1>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="blog-search" >
          <Select
              onChange={opt => window.location.href = "/blog/" + opt.value}
              placeholder={'Search Posts'}
              menuPlacement="auto"
              menuPosition="right"
              options={stuff} />
        </div>
        </div>
        
      {posts.map(post => (
        <div key={post.slug} className="box">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>
                    <h2 className="title">{post.title}</h2>
                    <em className="subtitle is-6 is-block">{post.dateFormatted}</em>
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
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