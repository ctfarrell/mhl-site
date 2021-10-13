import Image from 'next/image'

export default function OptionBubbles(props) {
    const bubbleImage = props.src
    return(
    <div className="flex flex-col flex-none h-80 w-80 place-items-center cursor-pointer place-self-auto group p-3">
        <div className="flex-none rounded-full h-1/2 w-1/2 bg-white ">
            <div className="object-contain place-items-center align-center p-4">
                <Image src={bubbleImage} alt="Icon" layout="responsive" width={props.width} height={props.height}/>
            </div>
        </div>
        <h1 className="italic group-hover:font-bold text-white text-xl text-center pt-8">{props.header}</h1>
        <h1 className="text-white text-xl text-center">{props.subtext}</h1>
    </div>
    )
}