import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex-col flex-1 justify-center content-center p-20 z-0 m-1">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <span className ="flex-1 relative width-1600 height-1200 z-0 m-1 bg-gray-300">
                <Image src="/screen_2x.jpg" alt="Fancy Office Pic" layout="responsive" height={800} width={1600} className="bg-none z-0 "/>
                <div className="container sm flex-col bg-white bg-opacity-70 sm gray-100 mx-auto z-10 py-10">
                    <section className="flex justify-center pt-4 pb-2">
                        <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="25" height="25" className="object-none object-center"/>
                    </section>
                        <h1 className="text-3xl text-center align-middle text-green-800">TOWN OF</h1>
                        <h1 className="text-4xl font-bold text-center align-middle text-green-800">MOOSE HIDE LANDING</h1>
                </div>
            </span>
            <span className="flex md:flex-col justify-between pt-40 relative width-1200 height-400">
                <div className = "flex-1 object-contain flex-col relative">
                </div>
                <div className="flex-1 object-contain">
                    <Image src="/horsetrack_cropped.jpg" alt="Horse Track" layout="fill" width="200" height="400"  className="object-contain" />
                </div>
            </span>
        </div>
    )
}