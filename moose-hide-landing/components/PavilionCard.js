import Image from "next/image";
import Link from 'next/link';
import {BsPeopleFill} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {HiCalendar} from 'react-icons/hi'
import cedarPavilion from '../public/pavilion-images/cedar-pavilion.png';




export default function PavilionCard(props) {
    const pavilion_image = "../public/pavilion-images/" + props.pavilionImage + ".png"
    const uriObject = {
        id: props.pavilionName,
        capacity: props.pavilionCapacity,
    };
    //console.log(uriObject)
    //console.log(props.pavilionLocation)
    return(
    <div className="flex flex-col place-items-center text-left place-self-auto group ">
        <div className="flex flex-none flex-row h-18 w-screen justify-between bg-primary z-10">
            <div className= "flex flex-none flex-col my-auto pl-6">
                <h1 className="text-white text-4xl my-auto pl-2 text-left justify-self-left">{props.pavilionName}</h1>
                <div className="flex flex-row align-items-center pl-2">
                    <BsPeopleFill className = "my-auto" size="30" color="white" />
                    <h1 className="text-white text-2xl mb-2 pl-4 pt-2 text-left justify-self-left">Capacity: {props.pavilionCapacity}</h1>
                </div>
            </div>
            <Link href={{
                pathname: "reserve-pavilion/pavilion",
                query: { object: JSON.stringify(uriObject)}
            }} passHref>
                <button className = "text-white text-2xl hover:font-bold mr-20 p-2 font-semibold border-2 border-primary border-transparent hover:border-white my-6"> RESERVE NOW </button>
            </Link>
        </div>
        <div className = "flex w-screen justify-between space-x-10 h-80 flex-row">
            <div className = "flex flex-col w-2/5 justify-between">
                <p className="pl-10 wrap text-2xl text-left justify-self-left w-full p-8">{props.pavilionText}</p>
                <div className="flex flex-row pl-10 pb-8">
                    <HiLocationMarker className = "flex-none" size="40"/>
                    <p className=" pl-2  pt-1 text-2xl text-left w-full">{props.pavilionLocation}</p>
                    <HiCalendar className="flex-none" size="40"/>
                    <p className=" pl-3  pt-1 text-2xl text-left w-full">{props.pavilionSchedule}</p>
                </div>
            </div>
            <div className = "container flex-none object-contain justify-self-right h-2/3 w-1/3 block">
                <Image src ={props.pavilionImage2.src} layout = "responsive" height={props.pavilionImage2.height} width = {props.pavilionImage2.width} className="object-fill" />
            </div>
        </div>
    </div>
    )
}