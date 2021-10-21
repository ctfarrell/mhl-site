import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import HomeOptions from '../modules/MenuOptions'
import OptionBubbles from '../modules/OptionBubbles'
import CalendarDates from '../modules/CalendarDates'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import what images we can statically
import communityIcon from '../public/icon-community.png';
import reservationsIcon from '../public/icon-reservations.png';
import servicesIcon from '../public/icon-services.png';
import govIcon from '../public/icon-gov.png';
import leafIcon from '../public/leaf-icon1.png';
import recreation from '../public/recreation.png';
import pavilion from '../public/pavilion.png';
import payment from '../public/payment.png';
import garbage from '../public/garbage.png';
import sports from '../public/sports.png';
import licensemgmt from '../public/licensemgmt.png';


export default function Home() {
    return (
        <div className="flex flex-auto h-screen flex-col">
            <Head>
            <title>Moose Hide Landing Rec</title>
            <meta name="Your one stop shop for all your city recreation needs!" content="Moose Hide Landing Parks and Recreation" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="fixed w-screen flex flex-row border-b-2 justify-between border-gray-800 bg-white bg-opacity-100 z-50 shadow-sm">
                <h1 className="text-2xl text-gray-800">MOOSE HIDE LANDING TOWN WEBSITE</h1>
                <h1 className="text-2xl text-gray-800">{new Date().toLocaleString() + ''}</h1>
            </div>
            <span className="flex flex-none place-items-center h-2/5 w-screen md:h-screen object-contain bg-fancy-office bg-cover bg-no-repeat">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src={leafIcon} alt="Leaf Icon" layout="fixed" width="50" height="50" className="object-none object-center"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-primary py-5">TOWN OF</h1>
                            <h1 className="text-5xl font-bold text-center align-middle text-primary pb-10 px-10">MOOSE HIDE LANDING</h1>
                    </div>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-screen z-10">
                <div className="container mx-auto place-items-center h-4/5 w-screen md:w-1/2 md:h-screen bg-white">
                    <div className="flex flex-col p-40 align-middle place-self-auto">
                        <div className="flex flex-row place-items-center cursor-pointer group p-3">
                            <div className="flex-none h-14 w-14">
                                <Image src={govIcon} alt="Icon" layout="responsive"/>
                            </div>
                            <p className="text-4xl font-bold text-center align-middle text-primary group-hover:animate-bounce opacity-100 tracking-wide p-2">GOVERNMENT</p>
                        </div>
                        <div className="flex flex-row place-items-center cursor-pointer group p-3">
                            <div className="flex-none h-14 w-14">
                                <Image src={communityIcon} alt="Icon" layout="responsive"/>
                            </div>
                            <p className="text-4xl font-bold text-center align-middle text-primary group-hover:animate-bounce opacity-100 tracking-wide p-2">COMMUNITY</p>
                        </div>
                        <div className="flex flex-row place-items-center cursor-pointer group p-3">
                            <div className="flex-none h-14 w-14">
                                <Image src={servicesIcon} alt="Icon" layout="responsive"/>
                            </div>
                            <p className="text-4xl font-bold text-center align-middle text-primary group-hover:animate-bounce opacity-100 tracking-wide p-2">SERVICES</p>
                        </div>
                        <div className="flex flex-row place-items-center cursor-pointer group p-3">
                            <div className="flex-none h-14 w-14">
                                <Image src={reservationsIcon} alt="Icon" layout="responsive"/>
                            </div>
                            <p className="text-4xl font-bold text-center align-middle text-primary group-hover:animate-bounce opacity-100 tracking-wide p-2">RESERVATIONS</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 h-4/5 w-screen md:w-1/2 md:h-screen object-contain object-left-top bg-horsetrack bg-cover bg-no-repeat">
                </div>
            </span>
            <span className="flex-none h-2/5 md:h-screen bg-primary z-20">
                <Link href="/service-center" passHref>
                    <h1 className="flex-none text-5xl text-white text-center cursor-pointer pt-14">SERVICE CENTER</h1>
                </Link>
                <div className="flex flex-row pt-14 place-items-center mt-10">
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                            <div className="object-contain place-items-center align-center p-4">
                                <Image src={payment} alt="Icon" layout="responsive" height="800" width="800"/>
                            </div>
                        </div>
                        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">Make a Payment</h1>
                        <h1 className="text-white text-xl text-center">Pay for your bills and tickets</h1>
                    </div>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                            <div className="object-contain place-items-center align-center p-4">
                                <Image src={licensemgmt} alt="Icon" layout="responsive"/>
                            </div>
                        </div>
                        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">License Management</h1>
                        <h1 className="text-white text-xl text-center">Get your own Hunting, Boating, and Fishing Licenses</h1>
                    </div>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                            <div className="object-contain place-items-center align-center p-4">
                                <Image src={garbage} alt="Icon" layout="responsive"/>
                            </div>
                        </div>
                        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">Garbage Management</h1>
                        <h1 className="text-white text-xl text-center">Learn how to recycle in Moose Hide Landing</h1>
                    </div>
                </div>
            </span>
            <span className="flex-none w-screen h-2/5 md:h-screen bg-primary z-20">
                <Link href="/pavilion-rental" passHref>
                    <h1 className="text-5xl text-white text-center cursor-pointer">RESERVATION CENTER</h1>
                </Link>
                <div className="flex flex-row self-center justify-items-center mt-10">
                    <Link href='/pavilions' passHref>
                        <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                            <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                                <div className="object-contain place-items-center align-center p-4">
                                    <Image src={pavilion} alt="Icon" layout="responsive"/>
                                </div>
                            </div>
                            <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">Pavilion Rentals</h1>
                            <h1 className="text-white group-hover:font-bold text-xl text-center">We provide diversified parks for field rentals</h1>
                        </div>
                    </Link>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                            <div className="object-contain place-items-center align-center p-4">
                                <Image src={sports} alt="Icon" layout="responsive"/>
                            </div>
                        </div>
                        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">Sports Field</h1>
                        <h1 className="text-white text-xl text-center">Make a plan and enjoy your favorite sports</h1>
                    </div>
                    <div className="flex flex-col flex-none h-80 w-80 mx-auto place-items-center cursor-pointer place-self-auto group p-3">
                        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
                            <div className="object-contain place-items-center align-center p-4">
                                <Image src={recreation} alt="Icon" layout="responsive"/>
                            </div>
                        </div>
                        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">Other Recreation</h1>
                        <h1 className="text-white text-xl text-center">Book an amazing experience</h1>
                    </div>
                </div>
            </span>
            <span className="flex flex-none h-4/5 flex-col md:flex-row md:h-scree">
                <div className="flex-1 bg-blue-200">
                    <p>town news</p>
                    <Link className="cursor-pointer hover:font-bold" href="/pavilions" passHref> link to pavilions</Link>
                </div>
                <div className="flex-1 flex-col">
                    <h1 className= "text-5xl text-primary text-center pt-8">TOWN CALENDAR</h1>
                    <div className = "mx-40 my-14 p-2 border-primary border-2 shadow-lg" >
                    <Calendar />
                    </div>
                    <div className="flex flex-auto flex-row mx-40 my-8">
                        <CalendarDates header="Sat Aug. 7" subtext="Moose Hide Landing Marathon"/>
                        <CalendarDates header="Sat Aug. 28" subtext="Moose Hide Landing Music Festival"/>
                    </div>
                </div>
            </span>
        </div>
        )
    }