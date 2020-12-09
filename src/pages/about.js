import about from '../../public/data/about/bio.json'
import Layout from '../components/Layout'

export default function About({ about }) {
  return (
    <Layout title="About">
      <h2 className="title has-text-centered">{about.name}</h2>
      <div className="grid-two-column">
      <div className='content section'>
      <div dangerouslySetInnerHTML={{__html:about.bioHtml}} />
      </div>
      <div className='img' style={{backgroundImage:`url(${about.profileImage})`}}></div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      about
    }
  }
}