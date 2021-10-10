export default function CalendarDates(props) {
    return(
    <div className="flex-1 flex-col cursor-pointer place-self-auto group p-3">
        <h1 className="italic font-bold text-primary text-xl text-center pt-8">{props.header}</h1>
        <h1 className="wrap text-primary text-xl text-center">{props.subtext}</h1>
    </div>
    )
}