import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div class="container sm flex-col bg-white bg-opacity-70 sm gray-100 mx-auto z-10 py-10">
                <section class="flex justify-center pt-4 pb-2">
                    <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="25" height="25" class="object-none object-center"/>
                </section>
                    <h1 class="text-3xl text-center align-middle text-green-800">TOWN OF</h1>
                    <h1 class="text-4xl font-bold text-center align-middle text-green-800">MOOSE HIDE LANDING</h1>
            </div>
            <Image src="/screen_2x.jpg" alt="Fancy Office Pic" layout="fill" class="z-0"/>
        </div>
    )
}
