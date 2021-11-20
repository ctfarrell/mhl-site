import cpr from '../public/cpr.png';
import Image from 'next/image'

export default function HunterEducationCard(props) {
    return (
        <div className = "flex flex-col bg-primary w-screen pt-10 ">
            <div className = "flex flex-initial bg-primary">
                <div className = "flex flex-initial flex-col bg-white justify-between object-contain mx-auto h-full w-1/3">
                    <div className = "bg-white flex flex-none w-full h-6"/>
                    <div className = "flex flex-row flex-none h-full justify-between">
                        <div className = "flex flex-col flex-none h-full w-3/4">
                            <h1 className="flex flex-none mx-auto text-center text-3xl font-bold mr-6">Colorado Parks and Wildlife</h1>
                            <div className = "pl-8 pt-8 flex flex-row w-3/4">
                                <div className = "flex flex-col pr-2 w-1/2">
                                    <h1 className = "">Certificate Number</h1>
                                    <h1 className = "font-bold">{props.token}</h1>
                                </div>
                                <div className = "flex flex-col">
                                    <h1 className = "">Certificate Date</h1>
                                    <h1 className = "font-bold">{props.issueDate}</h1>
                                </div>
                            </div>
                            <div className = "pl-8 pt-2 flex flex-row w-3/4">
                                <div className = "flex flex-col pr-2 w-1/2">
                                    <h1 className = "">Birth Date</h1>
                                    <h1 className = "font-bold">{props.birthDate}</h1>
                                </div>
                                <div className = "flex flex-col">
                                    <h1 className = "">Instructor</h1>
                                    <h1 className = "font-bold">{props.instructor}</h1>
                                </div>
                            </div>
                            <h1 className = "pt-10 flex text-2xl font-bold text-left pl-8">
                            {props.firstName  + " " + props.lastName}
                            </h1>
                            <h1 className = "flex flex-none text-xl text-left pl-8"> {props.address}</h1>                    </div>
                        <div className = "flex flex-col flex-none h-full w-1/4 relative right-0">
                            <div className = 'flex flex-auto h-24 w-24 absolute top-5 inset-x-0 mx-auto'>
                                <Image src = {cpr.src} layout = 'intrinsic' width = {cpr.width} height = {cpr.height} alt = {cpr.alt} />
                            </div>
                            <div className = "flex bg-primary bg-gradient-to-t from-white h-full w-16 mx-auto"/>
                        </div>
                    </div>
                    <div className = "flex flex-none bg-primary w-11/12">
                        <h1 className = "font-bold text-2xl text-white text-center mx-auto my-auto">HUNTER EDUCATION CARD</h1>
                    </div>
                    <div className = "bg-white flex flex-none w-full h-6"/>
                </div>
            </div>
        </div>
    )
}
