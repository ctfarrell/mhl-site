import Image from 'next/image'

export default function HomeOptions(props) {
    return(
    <div className="flex flex-row place-items-center cursor-pointer group p-3">
        <div className="h-14 w-14">
            <Image src={props.src} alt="Icon" layout="responsive" width={props.width} height={props.height}/>
        </div>
        <p className="text-4xl font-bold text-center align-middle text-primary group-hover:animate-bounce opacity-100 tracking-wide p-2">{props.optionName}</p>
    </div>
    )
}