import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeOptions from '../modules/homeOptions'
import {ImLeaf} from 'react-icons/im'

import {GiMoneyStack} from 'react-icons/gi'

export default function Home() {
    return (
        <div className="flex flex-auto h-screen flex-col">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className="flex-none h-2/5 w-screen md:h-screen object-contain bg-fancy-office bg-cover bg-no-repeat">
                    <div className="container flex-col align-middle bg-white bg-opacity-70 z-10 py-40">
                        <section className="flex justify-center pt-4 pb-2">
                            <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="25" height="25" className="object-none object-center"/>
                        </section>
                            <h1 className="text-3xl text-center align-middle text-green-800">TOWN OF</h1>
                            <h1 className="text-4xl font-bold text-center align-middle text-green-800">MOOSE HIDE LANDING</h1>
                    </div>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-screen z-10">
                <div className="flex-1 h-4/5 w-screen md:w-1/2 md:h-screen  items-center justify-center bg-blue-200">
                <ImLeaf color = "" className = "flex m-5 hover:animate-bounce" />
                </div>
                <div className="flex-1 h-screen w-screen md:w-1/2 object-contain object-left-top bg-horsetrack bg-cover bg-no-repeat">
                </div>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-green-800 z-20">
                <h1 className="flex-none text-5xl text-white text-center">SERVICE CENTER</h1>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-green-800 z-20">
                <Link href="/pavilion-rental">
                    <h1 className="flex-none text-5xl text-white text-center cursor-pointer">RESERVATION CENTER</h1>
                </Link>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-scree">
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