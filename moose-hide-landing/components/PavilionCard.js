import Image from "next/image";
import Link from 'next/link'


export default function PavilionCard(props) {
    const pavilion_image = "../public/pavilion-images/" + props.pavilionImage + ".png"
    const uriObject = {
        id: props.pavilionName,
        title: props.pavilionId
    };
    return(
    <div className="flex flex-col place-items-center text-left place-self-auto group ">
        <div className="flex flex-none flex-row h-18 w-screen justify-between bg-primary ">
            <div className= "flex flex-none flex-col my-auto pl-6">
                <h1 className="text-white text-4xl my-auto pl-2 text-left justify-self-left">{props.pavilionName}</h1>
                <h1 className="text-white text-2xl my-auto pl-4 pt-2 text-left justify-self-left">Pavilion Capacity: {props.pavilionCapacity}</h1>
            </div>
            <Link href={{
                pathname: "reserve-pavilion/pavilion",
                query: { object: JSON.stringify(uriObject)}
            }} passHref>
                <button className = "text-white hover:font-bold mr-20 p-2 border-4 my-6"> RESERVE NOW </button>
            </Link>
        </div>
        <div className = "flex w-screen justify-between flex-row">
            <p className="pl-10 wrap text-2xl text-left justify-self-left pt-8">{props.pavilionText}</p>
            <div className = "flex-none h-60 w-1/3">
                <img src = {pavilion_image} alt = {pavilion_image} height="200" width = "100"></img>
            </div>
        </div>
    </div>
    )
}