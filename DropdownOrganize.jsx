import React, {useState} from 'react'
import {organizeDropdown} from "./Navitems";
import {Link} from "react-router-dom";
import './Dropdown.css';



 function DropdownOrganize() {

    const [dropdown, setDropdown]= useState(false); 
    // to remove the dropdown when clicked

    return(
        <>
        <ul className={dropdown ?  "organizeDropdown clicked" : "organizeDropdown"} onClick={()=> setDropdown(!dropdown)}>
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

export default DropdownOrganize;