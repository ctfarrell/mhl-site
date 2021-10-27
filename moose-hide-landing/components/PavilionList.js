import react from 'react';
import { getServerSideProps } from '../pages/reserve-pavilion/[pavilion-name]';

import PavilionCard from '/components/PavilionCard'


export default function PavilionList(props) {
    //console.log(props.list_of_pavilions)
    return(
        props.list_of_pavilions.map(pav =>{
    return(
        <PavilionCard key={pav.pavilion_id} 
        pavilionCapacity = {pav.pavilion_capacity} 
        pavilionImage2 = {pav.pavilion__image} 
        pavilionName={pav.pavilion_name} 
        pavilionText={pav.pavilion_text} 
        pavilionImage = {pav.pavilion_image}
        pavilionLocation = {pav.pavilion_location}
        pavilionSchedule = {pav.pavilion_schedule}/>
    )
}
)
    )
}