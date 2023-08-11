import Link from "next/link"


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
    <nav>
        <Link href='/'>Home page</Link>
        <div>
            {links.map((link)=> (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar