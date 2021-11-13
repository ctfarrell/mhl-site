
import Link from 'next/link'

export default function NavBar() {
    return (
        <div className="fixed w-screen flex flex-row border-b-2 justify-between border-gray-800 bg-white bg-opacity-100 z-50 shadow-sm">
            <Link href='/' passHref>
                <h1 className="text-2xl text-gray-800 cursor-pointer">MOOSE HIDE LANDING TOWN WEBSITE</h1>
            </Link>
            <h1 className="text-2xl text-gray-800">{new Date().toLocaleString() + ''}</h1>
        </div>
    )
}
