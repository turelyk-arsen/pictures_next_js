'use client'
import Link from "next/link"
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Dashboard',
        url: '/dashboard'
    },
]

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link className={styles.logo} href='/'>Home page</Link>
        <div className={styles.links}> 
            {links.map((link)=> (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
            <button className={styles.logout} onClick={() => {console.log('Logout')}}>Logout</button>
        </div>
    </nav>
  )
}

export default Navbar