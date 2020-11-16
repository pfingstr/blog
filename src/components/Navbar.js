import Link from 'next/link'
import Image from 'next/image'
import posts from '../../public/data/posts.json'

export default function Navbar({ posts = [] }) {
  return (
    <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      
        <Link href="/">
          <a className="navbar-item">   
          <img src="/logo.png" alt="" />              
          </a>
        </Link>
      </div>
 
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <Link href="/blog">
            <a className="navbar-item">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">
              About
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts
    }
  }
}