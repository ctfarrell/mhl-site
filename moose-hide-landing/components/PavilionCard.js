import Image from "next/image";

export default function PavilionCard(props) {
    return(
    <div className="flex flex-col w-screen place-items-center  text-left place-self-auto group p-3">
        <div className="flex flex-none flex-row h-18 w-screen justify-between bg-primary ">
            <h1 className="text-white text-3xl my-auto pl-2 text-left justify-self-left">{props.pavilionName}</h1>
            <button className = "bg-red-500 font-bold mr-20 p-2 border-4 my-6"> RESERVE NOW </button>
        </div>
        <p className="wrap text-xl text-left justify-self-left pt-8">{props.pavilionText}</p>
    </div>
    )
}