import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar main-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">
          <link href="/favicon.ico" className="navbar-logo" />
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