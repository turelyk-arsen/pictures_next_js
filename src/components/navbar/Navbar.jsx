
import Link from "next/link"
import styles from './page.module.css'
import { useRouter } from "next/navigation"
import { Button, Text, useAuthenticator } from "@aws-amplify/ui-react"

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
    {
        id: 4,
        title: 'Create',
        url: '/create'
    }
]

const Navbar = () => {
    const router = useRouter();
    const {user, signOut} = useAuthenticator();
  return (
    <nav className={styles.container}>
        <Link className={styles.logo} href='/'>Home page</Link>
        <div className={styles.links}> 
            {links.map((link)=> (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
            {user ? (
                <>
                <Text>{user.username}</Text>
                {/* <button className={styles.logout} onClick={() => {console.log('Logout')}}>Logout</button> */}
                <Button onClick={() => {
                     signOut();
                    router.push('/')}}>Sign OUT</Button>
                </> 
            ): null}
        </div>
    </nav>
  )
}

export default Navbar