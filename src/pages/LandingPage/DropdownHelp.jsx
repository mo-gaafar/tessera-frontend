import React, {useState} from 'react'
import {helpDropdown} from "./Navitems";
import {Link} from "react-router-dom";
import './Dropdown.css';


function DropdownHelp() {

    const [dropdown, setDropdown]= useState(false); 
    // to remove the dropdown when clicked

    return(
        <>
        <ul className={dropdown ? "menuDropdownHelp helpDropdown clicked" : "menuDropdownHelp helpDropdown" } onClick={()=> setDropdown(!dropdown)}>
            {helpDropdown.map(item => {
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
export default DropdownHelp;