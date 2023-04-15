import React, { useState } from 'react';
import {eventsListScroll} from "./EventsList";
import EventBox from './LandingPage/EventBox';

export default function MoreEvents() {
    return (
        <>
        {eventsListScroll.map(item => {
                return ( <>
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={()=> setDropdown(false)}>
                            {item.title}
                        </Link>
                    </li>

                    <EventBox
                        image={item.image}
                        eventTitle={item.eventTitle}
                        date={item.date}
                        description={item.description}
                        organizer={item.organizer}
                        followers={item.followers}
                    />


                    </>


                )
            }) }


        </>
      
           
  
    );
  }
  
  export default function DropdownOrganize() {

    const [dropdown, setDropdown]= useState(false); 
    // to remove the dropdown when clicked

    return(
        <>
        <ul className={dropdown ?  "menuDropdownOrg organizeDropdown clicked" : "menuDropdownOrg organizeDropdown"} onClick={()=> setDropdown(!dropdown)}>
            {organizeDropdown.map(item => {
                return (
                    <li key={item.id}>
                        <Link to={item.path} className={item.cName} onClick={()=> setDropdown(false)}>
                            {item.title}
                        </Link>
                    </li>


                )
            }) }
        </ul>
        
        
        
        
        
        
        </>

    );
}


  