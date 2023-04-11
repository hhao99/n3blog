import Link from 'next/link'
export default function Navbar() {
    return (
        
            <ul className='flex flex-row'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/edit'>create a new Blog</Link>
                </li>
                 
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
       
    )
}