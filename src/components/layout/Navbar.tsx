import Link from 'next/link'
export default function Navbar() {
    return (
        
            <ul className='flex flex-row'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/blog'>Blog Page</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
       
    )
}