import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import react, { useState, useRef, useEffect } from 'react';
import PavilionList from '/components/PavilionList'
import LocationCheckboxes from '/components/LocationCheckboxes'
import ScheduleCheckboxes from '/components/ScheduleCheckboxes'
import {LolPavilions} from '/components/LolPavilions'
import {HiSearch} from 'react-icons/hi'
import {HiLocationMarker} from 'react-icons/hi'
import {HiCalendar} from 'react-icons/hi'
import {HiOutlineX} from 'react-icons/hi'



export default function Home() {
    const _pavilionList = LolPavilions
    const __pavilionLocations = new Set(LolPavilions.map(function(pavilion) {return(pavilion.pavilion_location)}))
    const _pavilionLocations = Array.from(__pavilionLocations)
    console.log(_pavilionLocations)
    const [pavilion_list, showPavilions] = useState(_pavilionList)
    const [searchTerm, setSearchTerm] = useState("")
    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }
    const groupCapacity = useRef()
    
    function usePavilionListLocations(pavilion_list_locations){
        return Array.from(new Set(pavilion_list_locations.map(function(pavilion) {return(pavilion.pavilion_location)})))
    }
    function usePavilionListSchedules(pavilion_list_schedules){
        return Array.from(new Set(pavilion_list_schedules.map(function(pavilion) {return(pavilion.pavilion_schedule)})))
    }

    useEffect(() => {
           showPavilions(_pavilionList.filter(pavi => pavi.pavilion_name.concat(pavi.pavilion_text).toLowerCase().includes(searchTerm.toLowerCase())))
     }, [searchTerm]);

    function filterPavilionList(e) {
        const groupCapacityForFilter = parseInt(groupCapacity.current.value)
        console.log(typeof groupCapacityForFilter)
        const filteredPavilionList = _pavilionList.filter(pavilion => pavilion.pavilion_capacity >= groupCapacityForFilter)
        showPavilions(filteredPavilionList)
        showLocations(location_list)
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
            <span className="flex flex-none place-items-center h-2/5 w-full md:h-screen object-contain bg-mountain-lake bg-cover bg-no-repeat mb-14">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src="/pavilion.png" alt="Icon" layout="responsive" height="738" width="800"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-primary px-10 pb-6">MOOSE HIDE LANDING</h1>
                            <h1 className="text-5xl font-bold text-center align-middle text-primary pb-10 px-10">PAVILIONS</h1>
                    </div>
            </span>
            <div className = "flex flex-col md:flex-row">
                <div className = "flex flex-row flex-initial md:flex-col md:w-1/3 md:px-4">
                    <h1 className = "text-3xl font-bold mx-auto">Pavilion Filter</h1>
                    <div className = "flex flex-row pt-6">
                        <HiSearch size="40" />
                        <h1 className = "pl-2 text-2xl">Pavilion Name</h1>
                    </div>
                    <div className="flex flex-none flex-row mb-6 py-4">
                        <input type="text" id="base-input" value = {searchTerm} onChange = {handleSearchChange} className ="py-2 bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        <button type="button" onClick={clearFilter} className="text-blue-700 bg-white border-2 border-gray-900 hover:bg-blue-700 font-medium rounded-lg text-sm sm:text-xl p-2.5 text-center inline-flex items-center ml-3">
                            <HiOutlineX size="20" className = ""/>
                        </button>
                    </div>
                    <div>
                        <div className = "flex flex-row pt-6 pb-4">
                            <HiLocationMarker size="40" />
                            <h1 className = "pl-2 text-2xl">Locations</h1>
                        </div>
                        <LocationCheckboxes list_of_locations = {usePavilionListLocations(pavilion_list)} className = "pt-8" />
                    </div>
                    <div>
                        <div className = "flex flex-row pt-6 pb-4">
                            <HiCalendar size="40" />
                            <h1 className = "pl-2 text-2xl">Schedule</h1>
                        </div>
                        <ScheduleCheckboxes list_of_schedules = {usePavilionListSchedules(pavilion_list)} className = "pt-8" />
                    </div>
                    <span className="flex flex-row">
                        <h1 className="font-bold text-xl p-4">How many people are in your group?</h1>
                        <input ref={groupCapacity} type="text" className="border-2 rounded-md border-gray focus:border-4 m-2" id="groupCapacityInput"></input>
                        <button onClick={filterPavilionList} className="border-2 rounded-md border-gray hover:font-xl m-2 px-2">Filter</button>
                        <button onClick={clearFilter} className="border-2 border-gray rounded-md hover:font-xl m-2 px-2">Clear</button>
                    </span>
                </div>
                <div className = "flex flex-col flex-initial width-screen md:width-2/3">
                    <PavilionList list_of_pavilions={pavilion_list}/>
                </div>
            </div>
            <div className="flex flex-none h-40 w-screen bg-primary z-20">
            </div>
        </div>
    )
}