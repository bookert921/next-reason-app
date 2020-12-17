import Link from 'next/link'
import {Navbar, Nav} from 'react-bootstrap'
import styles from '../styles/Header.module.css'

function Header({ user, loading }) {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" id="nav" className={styles.nav}>
      <Navbar.Brand>
        <Link href="/">
          <a><img 
              src="/Logo.jpg" 
              width="80" 
              height="80" 
              className="d-inline-block align-top" 
              alt="Book and Beyond"  
          /></a>
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {/* Why does this Nav.Link method render with About tag askew? */}
          {/* <Nav.Link><Link href="/">Home</Link></Nav.Link>
          <Nav.Link><Link href="/about">About</Link></Nav.Link> */}
          <li className="nav-item" className={styles.navLink}>
            <a className="nav-link">
              <Link href="/">Home</Link>
            </a>
          </li>
          <li className="nav-item" className={styles.navLink}>
            <a className="nav-link">
              <Link href="/about" >About</Link>
            </a>
          </li>
          <li className="nav-item" className={styles.navLink}>
            <a className="nav-link">
              <Link href="/books-blog" >Book's Blog</Link>
            </a>
          </li>
          <li className="nav-item" className={styles.navLink}>
            <a className="nav-link">
              <Link href="/contact" >Contact</Link>
            </a>
          </li>
        </Nav>
        
        {!loading &&
          (user ? (
            <>
            <Nav>
              <Nav.Link className={styles.navLink}>
                <Link href="/profile">Profile</Link>
              </Nav.Link>
              <Nav.Link className={styles.navLink}>
                <Link href="/api/logout">Logout</Link>
              </Nav.Link>
            </Nav>
            </>
          ) : (
            <Nav>
              <Nav.Link className={styles.navLink}>
                <Link href="/api/login">Login</Link>
              </Nav.Link>
            </Nav>
          ))} 
      </Navbar.Collapse>   
    </Navbar>
    </>
  )
}

export default Header

/* <Nav.Link href="/advanced/ssr-profile">
  Server rendered profile (advanced)
  </Nav.Link> */