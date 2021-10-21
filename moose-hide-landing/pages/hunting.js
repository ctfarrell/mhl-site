import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";

export default function Hunting() {
    return (
        <div className="flex-col flex-1 justify-left content-left">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="fixed w-screen flex flex-row border-b-2 justify-between border-gray-800 bg-white bg-opacity-100 z-50 shadow-sm">
                <Link href='/' passHref>
                    <h1 className="text-2xl text-gray-800 cursor-pointer">MOOSE HIDE LANDING TOWN WEBSITE</h1>
                </Link>
                <h1 className="text-2xl text-gray-800">{new Date().toLocaleString() + ''}</h1>
            </div>
            <div className = "h-1/2 w-screen">
                <div className = "bg-red-800 w-1/4 h-1/2">
                    Fox Image





                    help
                </div>
                <div className = "bg-primary w-3/4 h-1/2">
                    Moose Hide Landing 
                    is now in Colorado!
                </div>
            </div>
            <div className = "w-screen h-1/2 bg-blue-300">
                <div>
                    Elk Photo
                </div>
                <div>
                    <button className = "bg-primary">
                        Learn More
                    </button>
                </div>
                <div>
                    Hunter Photo
                </div>
            </div>
        </div>
    )
}