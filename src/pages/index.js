import Layout from '../components/Layout';
import home from '../../public/data/about/home.json'

export default function Home({ home }) {
  return (
    <Layout>
      
      <section className="section"></section>
      <section className="section">
      <h1 className="title has-text-centered">{home.title}</h1>
      <h2 className="subtitle has-text-centered">{home.subtitle}</h2>
      </section>
      <section className="section"></section>

    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      home
    }
  }
}

