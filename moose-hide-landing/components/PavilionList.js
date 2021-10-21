import react from 'react';

import PavilionCard from '/components/PavilionCard'


export default function PavilionList(props) {
    console.log(props.list_of_pavilions)
    return(
        props.list_of_pavilions.map(pav =>{
    return(
        <PavilionCard key={pav.pavilion_id} pavilionName={pav.pavilion_name} pavilionText={pav.pavilion_text}/>
    )
}
)
    )
}