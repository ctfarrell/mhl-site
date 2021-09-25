import Head from 'next/head'
import Image from 'next/image'
import HomeOptions from '../modules/homeOptions'

export default function Home() {
    return (
        <div className="flex flex-col">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container h-16 hover:text-opacity-100 bg-orange-10">
                <p className = "text-opacity-0 hover:text-opacity-100">Menu Div</p>
            </div>
            <span className="flex-1 bg-gray-200">
                <p>header span</p>
            </span>
            <span className="flex flex-col md:flex-row">
                <div className="flex-1 bg-blue-200">
                    <p>options div</p>
                </div>
                <div className="flex-1 bg-red-200">
                    <p>horsetrack pic div</p>
                </div>
            </span>
            <span className="flex-1 bg-purple-200">
                <p>Service Center span</p>
            </span>
            <span className="flex-1 bg-green-200">
                <p>reservation Center </p>
            </span>
            <span className="flex flex-col md:flex-row">
                <div className="flex-1 bg-blue-200">
                    <p>town news</p>
                </div>
                <div className="flex-1 bg-red-200">
                    <p>calendar of events</p>
                </div>
            </span>
        </div>
        )
    }