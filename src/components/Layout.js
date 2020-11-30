import Head from 'next/head'
import Navbar from './Navbar'
import useDeviceDetect from './DeviceDetect'


export default function Layout({ title = 'Blog', children = [] }) {
  const { isMobile } = useDeviceDetect();
  
  return (
    <div className="container">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>
      <Navbar layout={isMobile}/>
      <main className="main-content">
        {children}
      </main>
      <footer className="mb-6">
        &copy; Tamara Benedict
      </footer>
    </div>
  )
}