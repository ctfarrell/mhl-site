import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import HuntingModal from '/components/HuntingModal'
import wolf from '../public/wolf.webp';
import aelk from '../public/1elk.jpg';
import hunter from '../public/hunter.webp';
import cpr from '../public/cpr.png';
import db_api from '../utils/db_api.js'
import useSWR from "swr";

export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

export default function HuntingPage() {
    
    const myCitizen = {
        title: 'My todo title',
        completed: false,
      }
    //const fetcher = (...args) => fetch(...args).then(res => res.json())
    /*function createCitizen (id) {
        const { data, error } = useSWR(``, db_api.create(myCitizen))

        return {
          user: data,
          isLoading: !error && !data,
          isError: error
        }
      }
*/
    // Make API request to create new todo
    db_api.create(myCitizen).then((response) => {
        console.log(response)})
    
    //createCitizen()

        return (
        <div className="flex-col flex-1 justify-left content-left">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className = "flex flex-none flex-col h-screen w-screen">
                <div className = "flex flex-none flex-row h-1/2 w-screen">
                    <div className = "flex flex-none h-full w-1/3 bg-secondary">
                        <Image src = {wolf.src} layout = 'intrinsic' width = {wolf.width} height = {wolf.height} />
                    </div>
                    <div className = "flex flex-col bg-primary w-2/3 h-full place-content-end">
                        <h1 className = "text-white text-5xl font-bold pl-14 pb-4">Moose Hide Landing</h1>
                        <h1 className = "text-white text-5xl font-bold pl-14 pb-20">Hunting License Pilot Program</h1>
                    </div>
                    <div className = "bg-secondary flex flex-initial w-1/4 flex-col place-content-end h-full">
                        <div className = "w-2/3 mx-auto my-14">
                            <Image src = {cpr.src} layout = 'intrinsic' width = {cpr.width} height = {cpr.height} />
                        </div>
                    </div>
                </div>
                <div className = "flex w-screen h-1/2 bg-blue-300">
                    <div className = "flex flex-none h-full w-1/3 bg-secondary">
                        <Image src = {aelk.src} layout = 'intrinsic' width = {aelk.width} height = {aelk.height} />
                    </div>
                    <div className = "flex flex-col bg-black w-2/3 h-full place-items-start bg-secondary">
                        <p className = "flex flex-initial text-left text-3xl pl-14 pt-20 wrap w-4/5" >Colorado is the only state that allows landowners to sell/transfer their state issued landowner hunting tags to third party individuals. 
                        </p>
                        <button
                            className="bg-red-300 w-30 h-8 my-8 p-2 border-red-800 border-2 mx-auto my-auto">create citizen</button>
                    </div>
                    <div className = "flex flex-initial w-1/4 h-full bg-secondary">
                        <Image src = {hunter.src} layout = 'intrinsic' width = {hunter.width} height = {hunter.height} />
                    </div>
                </div>
            </div>
        </div>
        //</body>
      //</Html>
    );
  }
//}

//export default MainDocument;