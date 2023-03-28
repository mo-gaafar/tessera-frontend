import React, {useState} from 'react'
import {hamburgerDropdown} from "./Navitems";
import {Link} from "react-router-dom";
import './Dropdown.css';



 function DropdownHamburger() {

    const [dropdown, setDropdown]= useState(false);  


    return(
        <>

        <ul className={dropdown ?  "menuDropdownham  hamburgerDropdown clicked" : "menuDropdownham hamburgerDropdown"} onClick={()=> setDropdown(!dropdown)}>
         {hamburgerDropdown.map(item => {
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

export default DropdownHamburger;

{/* <ul className={dropdown ?  "menuDropdownOrg hamburgerDropdown clicked" : "menuDropdownOrg hamburgerDropdown"} onClick={()=> setDropdown(!dropdown)}>
{hamburgerDropdown.map(item => {
    return (
        <li key={item.id}>
            <Link to={item.path} className={item.cName} onClick={()=> setDropdown(false)}>
                {item.title}
            </Link>
        </li>


    )
}) }
</ul> */}



