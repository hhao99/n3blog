import Link from 'next/link'
import { useSession } from 'next-auth/react'
export default function Navbar() {
    const { data: session, status} = useSession()
    const hidden = status === 'authenticated' ? '' : 'none'
    return (
        
            <ul className='flex flex-row'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li style={{display: hidden}}>
                    <Link href='/edit'>create a new Blog</Link>
                </li>
                 
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
       
    )
}