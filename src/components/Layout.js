import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ title = 'Blog', children = [] }) {
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>

      <Navbar />
      
      <main className="main-content">
        {children}
      </main>

      <footer className="mb-6">
        &copy; {(new Date()).getFullYear()}
      </footer>
    </div>
  )
}