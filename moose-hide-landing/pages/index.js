import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeOptions from '../modules/homeOptions'


export default function Home() {
    return (
        <div className="flex flex-auto h-screen flex-col">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed w-screen flex flex-row border-b-2 justify-between border-gray-800 bg-white bg-opacity-100 shadow-sm">
                <h1 className="text-2xl text-gray-800">MOOSE HIDE LANDING TOWN WEBSITE</h1>
                <h1 className="text-2xl text-gray-800">{new Date().toLocaleString() + ''}</h1>
            </div>
            <span className="flex flex-none place-items-center h-2/5 w-screen md:h-screen object-contain bg-fancy-office bg-cover bg-no-repeat">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="50" height="50" className="object-none object-center"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-green-800 py-5">TOWN OF</h1>
                            <h1 className="text-5xl font-bold text-center align-middle text-green-800 pb-10 px-10">MOOSE HIDE LANDING</h1>
                    </div>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-screen z-10">
                <div className="flex-1 place-items-center h-4/5 w-screen md:w-1/2 md:h-screen bg-white">
                    <div className="flex flex-col p-40 align-middle">
                        <HomeOptions src='/icon-gov.png' optionName='GOVERNMENT' height="798" width="800" />
                        <HomeOptions src='/icon-community.png' optionName='COMMUNITY' height="465" width="800"/>
                        <HomeOptions src='/icon-services.png' optionName='SERVICES' height="505" width="800"/>
                        <HomeOptions src='/icon-reservations.png' optionName='RESERVATIONS' height="800" width="571"/>
                    </div>
                </div>
                <div className="flex-1 h-4/5 w-screen md:w-1/2 md:h-screen object-contain object-left-top bg-horsetrack bg-cover bg-no-repeat">
                </div>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-green-800 z-20">
                <Link href="service-center">
                    <h1 className="flex-none text-5xl text-white text-center cursor-pointer">SERVICE CENTER</h1>
                </Link>
                <div className="flex flex-row self-center justify-items-center">
                    <div className="rounded-full h-20 w-20 bg-white self-center "></div>
                    <div className="rounded-full h-20 w-20 bg-white "></div>
                    <div className="rounded-full h-20 w-20 bg-white "></div>
                </div>
            </span>
            <span className="flex-none w-screen h-2/5 md:h-screen bg-green-800 z-20">
                <Link href="/pavilion-rental">
                    <h1 className="text-5xl text-white text-center cursor-pointer">RESERVATION CENTER</h1>
                </Link>
                <div className="rounded-full h-20 w-20 bg-white "></div>
                <div className="rounded-full h-20 w-20 bg-white "></div>
                <div className="rounded-full h-20 w-20 bg-white "></div>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-scree">
                <div className="flex-1 bg-blue-200">
                    <p>town news</p>
                </div>
                <div className="flex-1 bg-red-200">
                    <p>calendar of events</p>
                    <div className="rounded-full h-20 w-20 bg-white">lol</div>
                </div>
            </span>
        </div>
        )
    }