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
            <div className = "flex flex-none flex-row h-screen w-screen">
                <div className = "flex bg-red-800 w-1/4 h-1/2">
                    Fox Image





                    help
                </div>
                <div className = "flex bg-primary w-3/4 h-1/2 text-center justify-items-center">
                    Moose Hide Landing
                    is now in Colorado!
                </div>
            </div>
            <div className = "flex w-screen h-1/2 bg-blue-300">
                <div className = "flex bg-purple-800 w-1/4 h-1/2">
                    Elk Photo
                </div>
                <div className = "flex bg-black w-2/3 h-1/2">
                    <button className = "flex bg-primary">
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