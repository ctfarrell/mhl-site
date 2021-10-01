import Image from 'next/image'

export default function UnderConstruction() {
    return (
        <div className="flex flex-auto h-screen flex-col">
            <span className="flex flex-none place-items-center h-2/5 w-screen md:h-screen object-contain bg-fancy-office bg-cover bg-no-repeat">
                    <div className="flex flex-col mx-auto align-items-center bg-white bg-opacity-70">
                        <section className="flex justify-center pt-10 pb-2">
                            <Image src="/leaf-icon1.png" alt="Leaf Icon" layout="fixed" width="50" height="50" className="object-none object-center"/>
                        </section>
                            <h1 className="text-5xl text-center align-middle text-green-800 py-5">SORRY!</h1>
                            <h1 className="text-5xl text-center align-middle text-green-800 pb-10 px-10">THIS PAGE IS UNDER CONSTRUCTION</h1>
                    </div>
            </span>
        </div>
        )
    }