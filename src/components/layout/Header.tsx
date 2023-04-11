import Navbar from "./Navbar";
const title = 'Eric Hao\' Blog'
export default function Header() {
    return (
        <div className='flex justify-between'>
            <h3>{title}</h3>
            <Navbar />
        </div>
    )
}