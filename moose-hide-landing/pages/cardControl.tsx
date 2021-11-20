import HecForm from "../components/HecForm.js"


export default function cardControl() {
    return (
        <div className = "flex flex-initial flex-col bg-secondary w-screen h-screen">
            <h1 className = "font-bold text-6xl mx-auto pt-20">Hunter&lsquo;s Education Card</h1>
            <h1 className = "font-bold text-6xl mx-auto">Control Panel</h1>
            <HecForm/>
        </div>
    )
}
