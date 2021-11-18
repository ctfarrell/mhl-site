import Head from "next/head";
import Link from 'next/link'
import Image from "next/image";
import wolf from '../public/wolf.webp';
import aelk from '../public/1elk.jpg';
import hunter from '../public/hunter.webp';
import elk from '../public/elk.webp';
import cpr from '../public/cpr.png';
import absoluteUrl from "next-absolute-url";
import useSWR from "swr";
import mhl_citizens from '/utils/mhl-citizens.js'
import { useState, useEffect } from 'react';
import HunterFlow from "../components/HunterFlow";




export default function HuntingPage() {
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
                        <Image src = {wolf.src} layout = 'intrinsic' width = {wolf.width} height = {wolf.height} alt = {wolf.alt} />
                    </div>
                    <div className = "flex flex-col bg-primary w-2/3 h-full place-content-end">
                        <h1 className = "text-white text-5xl font-bold pl-14 pb-4">Moose Hide Landing</h1>
                        <h1 className = "text-white text-5xl font-bold pl-14 pb-20">Hunting License Pilot Program</h1>
                    </div>
                    <div className = "bg-primary flex flex-initial w-1/4 flex-col place-content-end h-full">
                        <div className = "w-2/3 mx-auto my-14">
                            <Image src = {cpr.src} layout = 'intrinsic' width = {cpr.width} height = {cpr.height} alt = {cpr.alt} />
                        </div>
                    </div>
                </div>
                <div className = "flex w-screen h-1/2 bg-blue-300">
                    <div className = "flex flex-none h-full w-1/3 bg-secondary">
                        <Image src = {aelk.src} layout = 'intrinsic' width = {aelk.width} height = {aelk.height} alt = {aelk.alt} />
                    </div>
                    <div className = "flex flex-col bg-black w-2/3 h-full place-items-start bg-secondary">
                        <p className = "flex flex-initial text-left text-3xl pl-14 pt-20 wrap w-4/5" >Colorado is the only state that allows landowners to sell/transfer their state issued landowner hunting tags to third party individuals. 
                        </p>
                        <button
                            className="bg-primary w-30 h-8 my-8 p-2 2 mx-auto my-auto"
                            >Learn More...
                        </button>
                    </div>
                    <div className = "flex flex-initial w-1/4 h-full bg-secondary">
                        <Image src = {hunter.src} layout = 'intrinsic' width = {hunter.width} height = {hunter.height} alt = {hunter.alt} />
                    </div>
                </div>
            </div>
            <div className ="flex flex-1 bg-secondary h-full w-screen ">
                <div className = "flex flex-initial mx-auto m-40 bg-secondary">
                    <Image src = {elk.src} layout = 'fixed' width = {elk.width} height = {elk.height} alt = {elk.alt} />
                </div>
            </div>
            <div className = "flex flex-initial bg-primary flex-col w-screen h-screen">
                        <HunterFlow/>
            </div>
        </div>
    );
}