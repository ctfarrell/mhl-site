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
import {BsPeopleFill} from 'react-icons/bs'




export default function Home() {
    const _pavilionList = LolPavilions
    const __pavilionLocations = new Set(LolPavilions.map(function(pavilion) {return(pavilion.pavilion_location)}))
    const _pavilionLocations = Array.from(__pavilionLocations)
    console.log(_pavilionLocations)
    const [pavilion_list, showPavilions] = useState(_pavilionList)
    const [searchTerm, setSearchTerm] = useState("")
    const [groupCapacity, setGroupCapacity] = useState(0)
    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }
    const handleCapacityFilter = event => {
        setGroupCapacity(event.target.value);
    }

    
    //const groupCapacity = useRef()
    
    function usePavilionListLocations(pavilion_list_locations){
        return Array.from(new Set(pavilion_list_locations.map(function(pavilion) {return(pavilion.pavilion_location)})))
    }
    function usePavilionListSchedules(pavilion_list_schedules){
        return Array.from(new Set(pavilion_list_schedules.map(function(pavilion) {return(pavilion.pavilion_schedule)})))
    }

    useEffect(() => {
           showPavilions(_pavilionList.filter(pavi => pavi.pavilion_name.concat(pavi.pavilion_text).toLowerCase().includes(searchTerm.toLowerCase())))
     }, [searchTerm]);

    useEffect(() => {
        showPavilions(_pavilionList.filter(pavilion => pavilion.pavilion_capacity >= groupCapacity))
    },[groupCapacity]);
    /*
    function filterPavilionList(e) {
        const groupCapacityForFilter = parseInt(groupCapacity.current.value)
        console.log(typeof groupCapacityForFilter)
        const filteredPavilionList = _pavilionList.filter(pavilion => pavilion.pavilion_capacity >= groupCapacityForFilter)
        showPavilions(filteredPavilionList)
        showLocations(location_list)
    }
*/
    function clearFilter(e) {
        setGroupCapacity(0)
        setSearchTerm("")
        showPavilions(_pavilionList)
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
                <div className = "flex flex-row flex-none md:flex-col md:w-1/3 md:px-4">
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
                    <div className = "flex flex-row pt-6">
                        <BsPeopleFill size="40" />
                        <h1 className = "pl-2 text-2xl">Pavilion Capacity</h1>
                    </div>
                    <div className="flex flex-none flex-row mb-6 py-4">
                        <input type="number" id="base-input-number" value = {groupCapacity} onChange = {handleCapacityFilter} className ="py-2 bg-gray-50 border-2 border-gray-300 text-gray-900 sm:text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
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