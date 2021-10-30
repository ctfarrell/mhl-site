import react from 'react';
import { getServerSideProps } from '../pages/reserve-pavilion/[pavilion-name]';
import wicker from '../public/pavilion-images/wicker-pavilion.png'
import PavilionCard from '/components/PavilionCard'

function pavilionCount(lop) {
    if (lop.length == 0) {
        return [
            {
            "pavilion_id": 999,
            "pavilion_name": "No Results",
            "pavilion_text": "We're really sorry about this, but your search didn't return any results. I think we're going to need to build more pavilions in Moose Hide Landing",
            "pavilion_capacity": 0,
            "pavilion_location": "Nowhere",
            "pavilion_schedule": "Never",
            "pavilion_image": "hilltop-pavilion",
            "pavilion__image": wicker
          }]
        } else {return lop}

}

export default function PavilionList(props) {
    return(
        pavilionCount(props.list_of_pavilions).map(pav =>{
    return(
        <PavilionCard
        key={pav.pavilion_id} 
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