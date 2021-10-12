import Image from "next/image";

export default function PavilionCard(props) {
    return(
    <div className="flex flex-col w-screen place-items-center  text-left place-self-auto group p-3">
        <div className="flex-none h-18 w-screen bg-primary ">
            <h1 className="text-white text-xl pl-2 text-left justify-self-left">{props.pavilionName}</h1>
        </div>
        <p className="wrap text-xl text-left justify-self-left pt-8">{props.pavilionText}</p>
    </div>
    )
}