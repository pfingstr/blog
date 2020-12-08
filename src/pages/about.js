// import ReactMarkdown from 'react-markdown'
// import matter from 'gray-matter'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout title="About">
      <div className="grid-two-column">
      <h1 className="title">Image</h1>
      <p></p>
      <h1 className="title">Under Construction</h1>
      <p></p>
      </div>
    </Layout>
  )
}

/*export async function getStaticProps() {
  const bio = await import(`../../public/data/about/bio.md`)
  const data = matter(bio.default)
  return {
    props: {
      name: data.name,
      bio: data.bio,
      profileImage: data.profileImage,
    }
  }
}*/