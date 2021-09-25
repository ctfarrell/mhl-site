import Head from 'next/head'
import Image from 'next/image'
import HomeOptions from '../modules/homeOptions'

export default function Home() {
    return (
        <div className="flex flex-auto h-screen flex-col">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className="flex-none h-2/5 md:h-screen bg-gray-200 object-contain z-0">
                <Image src="/screen_2x.jpg" alt="Fancy Office Pic" layout="fill" width="400" height="264" className="z-0"/>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-screen z-10">
                <div className="flex-1 w-screen items-center justify-items-center bg-blue-200">
                    <HomeOptions src="/icon-gov.png" alt="leaf icon" optionName="GOVERNMENT" className="z-50"></HomeOptions>
                    <HomeOptions src="/icon-community.png" alt="leaf icon" optionName="COMMUNITY" className="z-50"></HomeOptions>
                    <HomeOptions src="/icon-services.png" alt="leaf icon" optionName="SERVICES" className="z-50"></HomeOptions>
                    <HomeOptions src="/icon-reservations.png" alt="leaf icon" optionName="RESERVATIONS" className="z-50"></HomeOptions>
                </div>
                <div className="flex-1 object-contain">
                    <Image src="/horsetrack_cropped.jpg" alt="Horse Track" layout="fill" width="443" height="540"  className="object-contain z-10" />
                </div>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-purple-200 z-20">
                <p>Service Center span</p>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-green-200">
                <p>reservation Center </p>
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