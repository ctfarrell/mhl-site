import cpr from '../public/cpr.png';
import Image from 'next/image'

export default function HunterEducationCard(props) {
    return (
        <div className = "flex flex-col bg-primary w-screen ">
            <div className = "bg-white border-black border-6 container flex flex-col h-80 w-90 mx-auto my-20 space-between">
                <div className = "flex flex-row justify-between align-items-center">
                    <div className = "flex flex-col m-10">
                        <h1 className="text-3xl font-bold">State of Colorado</h1>
                        <h1 className="text-3xl font-bold">Hunter&apos;s Education Card</h1>
                    </div>
                    <div className = 'm-8 h-40 w-40'>
                        <Image src = {cpr.src} layout = 'intrinsic' width = {cpr.width} height = {cpr.height} alt = {cpr.alt} />
                    </div>
                </div>
                <div className = "flex flex-col">
                    <h1 className = "text-2xl font-bold mx-auto my-auto">
                    {props.firstName  + " " + props.lastName}
                    </h1>
                    <h1 className = "text-2xl mx-auto my-auto">
                    {"Issued: " + props.issueDate}
                    </h1>
                </div>   
            </div>
        </div>
        
    )
}
