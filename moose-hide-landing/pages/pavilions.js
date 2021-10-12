import Head from 'next/head'
import PavilionCard from '/components/PavilionCard';
import Image from "next/image";



export default function Home() {
    return (
        <div className="flex-col flex-1 justify-left content-left">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className="fixed w-screen flex flex-row border-b-2 justify-between border-gray-800 bg-white bg-opacity-100 z-50 shadow-sm">
                <h1 className="text-2xl text-gray-800">MOOSE HIDE LANDING TOWN WEBSITE</h1>
                <h1 className="text-2xl text-gray-800">{new Date().toLocaleString() + ''}</h1>
            </div>
            <span className="flex flex-none place-items-center h-2/5 w-screen md:h-screen object-contain bg-mountain-lake bg-cover bg-no-repeat">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src="/pavilion.png" alt="Icon" layout="responsive" height="738" width="800"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-primary px-10 pb-6">MOOSE HIDE LANDING</h1>
                            <h1 className="text-5xl font-bold text-center align-middle text-primary pb-10 px-10">PAVILIONS</h1>
                    </div>
            </span>
            <PavilionCard pavilionName="Hide Pond Pavilion" pavilionText="Pavilion One is really nice." className="justify-self-start"/>
        </div>
    )
}