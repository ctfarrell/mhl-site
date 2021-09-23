import Image from 'next/image'

export default function HomeOptions(props) { 
    return(
    <div class="flex items-center cursor-pointer group p-3">
        <Image src={props.src} alt="Icon" layout="fixed" width="50" height="30" class="opacity-100 p-1" />
        <p class="text-3xl font-bold text-center align-middle text-green-800 opacity-100 group-hover:opacity-100 tracking-wide p-2">{props.optionName}</p>
    </div>
    )
}