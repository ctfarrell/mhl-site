import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import react, { useState, useRef } from 'react';
import PavilionList from '/components/PavilionList'
import {LolPavilions} from '/components/LolPavilions'

export default function Home() {
    const _pavilionList = LolPavilions
    //const pav_list = JSON.parse(sheet1)
    const [pavilion_list, showPavilions] = useState(_pavilionList)
    //[{"pavilion_id":1,"pavilion_name":"super pavilion","pavilion_text":"this pavilion is awesome"},{"pavilion_id":2,"pavilion_name":"super pavilion","pavilion_text":"this pavilion is awesome"}])
    const groupCapacity = useRef()

    function filterPavilionList(e) {
        const groupCapacityForFilter = parseInt(groupCapacity.current.value)
        console.log(typeof groupCapacityForFilter)
        const filteredPavilionList = _pavilionList.filter(pavilion => pavilion.pavilion_capacity >= groupCapacityForFilter)
        showPavilions(filteredPavilionList)
    }

    function clearFilter(e) {
        showPavilions(_pavilionList)
        document.getElementById("groupCapacityInput").value = ""
    }

    //console.log(pavilion_list)
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
            <span className="flex flex-none place-items-center h-2/5 w-screen md:h-screen object-contain bg-mountain-lake bg-cover bg-no-repeat">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src="/pavilion.png" alt="Icon" layout="responsive" height="738" width="800"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-primary px-10 pb-6">MOOSE HIDE LANDING</h1>
                            <h1 className="text-5xl font-bold text-center align-middle text-primary pb-10 px-10">PAVILIONS</h1>
                    </div>
            </span>
            <span className="flex flex-row">
                <h1 className="font-bold text-xl p-4">How many people are in your group?</h1>
                <input ref={groupCapacity} type="text" className="border-2 rounded-md border-gray focus:border-4 m-2" id="groupCapacityInput"></input>
                <button onClick={filterPavilionList} className="border-2 rounded-md border-gray hover:font-xl m-2 px-2">Filter</button>
                <button onClick={clearFilter} className="border-2 border-gray rounded-md hover:font-xl m-2 px-2">Clear</button>
            </span>
            <div className = "space-y-1">
                <PavilionList list_of_pavilions={pavilion_list}/>
            </div>
        </div>
    )
}