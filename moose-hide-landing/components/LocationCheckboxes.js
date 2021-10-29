
export default function LocationCheckboxes(props) {
    console.log(props.list_of_locations)
    return(
        props.list_of_locations.map(location =>{
            return(
                <div key={location} className="flex items-center items-start pl-12 mb-4">
                    <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-6 w-6 rounded" unchecked/>
                    <label htmlfor="checkbox-1" className="text-xl my-auto ml-3 font-medium text-gray-900">{location}</label>
                </div>
            )
}
        )
    )
}