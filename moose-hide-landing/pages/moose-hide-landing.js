import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomeOptions from '../modules/homeOptions'

export default function Home() {
    return (
        <div class="flex-col flex-1 justify-center content-center p-20 z-0 m-1">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className ="flex-1 relative width-1600 height-1200 z-0 m-1 bg-gray-300">
                <div class="container sm flex-col bg-white bg-opacity-70 sm gray-100 mx-auto z-10 py-10">
                    <section class="flex justify-center pt-4 pb-2">
                        <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="25" height="25" class="object-none object-center"/>
                    </section>
                        <h1 class="text-3xl text-center align-middle text-green-800">TOWN OF</h1>
                        <h1 class="text-4xl font-bold text-center align-middle text-green-800">MOOSE HIDE LANDING</h1>
                </div>
                <Image src="/screen_2x.jpg" alt="Fancy Office Pic" layout="responsive" height={800} width={1600} class="relative z-0 "/>
            </span>
            <span class="flex pt-40 relative width-1200 height-400">
                <div className = "flex-col relative">
                    <HomeOptions src="/icon-gov.png" alt="leaf icon" optionName="GOVERNMENT" class="z-50"></HomeOptions>
                    <HomeOptions src="/icon-community.png" alt="leaf icon" optionName="COMMUNITY" class="z-50"></HomeOptions>
                    <HomeOptions src="/icon-services.png" alt="leaf icon" optionName="SERVICES" class="z-50"></HomeOptions>
                    <HomeOptions src="/icon-reservations.png" alt="leaf icon" optionName="RESERVATIONS" class="z-50"></HomeOptions>
                </div>
                <div class="inline-block">
                    <Image src="/horsetrack_cropped.jpg" alt="Horse Track" layout="fill" width="200" height="400"  class="object-contain" />
                </div>
            </span>
        </div>
    )
}
