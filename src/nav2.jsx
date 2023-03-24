import React, {useState} from 'react'
import GlobalStyles from './components/styles/global';
import './navstyle.css';
import {Link} from "react-router-dom";
import {navItemsLanding} from "./Navitems";
import DropdownOrganize from "./DropdownOrganize";
import DropdownHelp from "./DropdownHelp";


export default function Navbar (){
    const [dropdownforOrganize, setDropdownOrganize]= useState(false);

    const [dropdownforHelp, setDropdownHelp]= useState(false);

    const [showNavItems, setshowNavItems]= useState(false); 

return ( 
    <div className = "container">
        <GlobalStyles />

        <nav className="navBar">
        <div className="siteLogoSection"> <svg className="logoSvg" viewBox="0 0 200 36"><g fill-rule="evenodd"><g><g transform="translate(.347)"><path d="M185.945 17.513c2.693-.61 5.381.495 6.878 2.584l-11.905 2.693c.411-2.52 2.333-4.668 5.027-5.277zm6.944 9.91a6.57 6.57 0 01-3.979 2.679c-2.711.614-5.417-.51-6.908-2.626l11.942-2.702 1.945-.44 3.719-.841a11.782 11.782 0 00-.31-2.372c-1.513-6.426-8.055-10.432-14.611-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.61 8.95 3.864-.875 6.869-3.46 8.377-6.751l-5.655-1.269z"></path><path id="logo-wordmark-brand_svg__Fill-10" d="M164.788 35.118V18.082h-3.677v-5.804h3.677V4.289h6.244v7.989h4.69v5.804h-4.69v17.036z"></path><path d="M152.86 35.118h6.03v-22.84h-6.03v22.84zm-.785-30.853c0-2.114 1.667-3.7 3.825-3.7 2.157 0 3.775 1.586 3.775 3.7 0 2.115-1.618 3.748-3.775 3.748-2.158 0-3.825-1.633-3.825-3.748zM150.76 12.342c-3.082.16-4.9.633-6.75 1.973v-2.037h-6.026v22.84h6.026v-11.2c0-3.524.86-5.529 6.75-5.726v-5.85zM117.16 24.057c.15 3.333 3.051 6.128 6.602 6.128 3.601 0 6.552-2.942 6.552-6.422 0-3.432-2.95-6.373-6.552-6.373-3.551 0-6.452 2.843-6.602 6.128v.539zm-5.88 11.061V1.38l6.03-1.364v13.962c1.863-1.49 4.07-2.115 6.472-2.115 6.864 0 12.355 5.286 12.355 11.918 0 6.583-5.491 11.965-12.355 11.965-2.403 0-4.609-.624-6.472-2.114v1.487h-6.03z"></path><path id="logo-wordmark-brand_svg__Fill-1" d="M98.445 35.118V17.965h-3.677v-5.687h3.677V4.283l6.244-1.413v9.408h4.69v5.687h-4.69v17.153z"></path><path d="M87.394 35.118V22.915c0-4.421-2.402-5.382-4.805-5.382-2.402 0-4.805.913-4.805 5.286v12.299h-6.03v-22.84h6.03v1.699c1.324-.961 2.942-2.115 6.13-2.115 5.098 0 9.51 2.932 9.51 10.092v13.164h-6.03zM56.484 17.513c2.694-.61 5.382.495 6.878 2.584L51.458 22.79c.41-2.52 2.332-4.668 5.026-5.277zm6.945 9.91a6.57 6.57 0 01-3.98 2.679c-2.711.614-5.416-.51-6.907-2.626l11.942-2.702 1.944-.44 3.72-.841a11.782 11.782 0 00-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.611 8.95 3.863-.875 6.868-3.46 8.376-6.751l-5.654-1.269z"></path><path id="logo-wordmark-brand_svg__Fill-2" d="M31.89 35.118l-9.364-22.84h6.57l5.932 15.49 5.982-15.49h6.57l-9.365 22.84z"></path><path d="M10.703 17.507c2.694-.61 5.382.495 6.878 2.584L5.677 22.785c.41-2.52 2.332-4.668 5.026-5.278zm6.945 9.91a6.57 6.57 0 01-3.98 2.68c-2.71.613-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.718-.842a11.782 11.782 0 00-.31-2.371c-1.513-6.426-8.055-10.433-14.61-8.95C2.888 13.65-1.2 20.063.314 26.489c1.514 6.426 8.055 10.432 14.611 8.949 3.864-.874 6.869-3.46 8.376-6.75l-5.654-1.27z"></path></g></g></g></svg> </div>

        <div className="searchSection"> 
            

            <div className="magnifyingGlassDiv"> <svg className="magnifyingGlass" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="magnifying-glass-chunky_svg__eds-icon--magnifying-glass-chunky_base" fill-rule="evenodd" clip-rule="evenodd" d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path></svg> </div>
            <input className= "searchBar" type="text" placeholder="Search events"/>
        
        </div>

        <div className="optionsSection" >

            <ul className="landingItems" id={showNavItems ? "hidden" : ""}>

            <button className="hamburgerNavMenu" onClick={()=>setshowNavItems(!showNavItems)}>
               <svg className="hamburgermenu" id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_svg" x="0" y="0" viewBox="0 0 24 24" xml:space="preserve"><path id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_2" fill-rule="evenodd" clip-rule="evenodd" d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"></path><circle id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="12" r="2"></circle><circle id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_1" fill-rule="evenodd" clip-rule="evenodd" cx="12" cy="6" r="2"></circle></svg>
               </button>

            {navItemsLanding.map(item=> {
                    if (item.title === "Organize" ){
                        return (
                    
                            <li key={item.id} className={item.cName}>
        
                                <Link to={item.path} onMouseOver={()=>{setDropdownOrganize(true)}} onMouseLeave={()=>{setDropdownOrganize(false)}}>
                                    {item.title}
                                </Link>
                                {dropdownforOrganize && <DropdownOrganize/>}
                            </li>
        
                       );

                    

                    }
                    if (item.title === "Help" ){
                        return (
                    
                            <li key={item.id} className={item.cName}>
        
                                <Link to={item.path} onMouseOver={()=>{setDropdownHelp(true)}} onMouseLeave={()=>{setDropdownHelp(false)}}>
                                    {item.title}
                                </Link>
                                {dropdownforHelp && <DropdownHelp/>}
                            </li>
        
                       );
                    }
                    
                    return (
                    
                    <li key={item.id} className={item.cName}>

                        <Link to={item.path}>{item.title}</Link>
                    </li>

               ); }   )}

               

            </ul>
            
        </div>

        </nav>

        <div className="imageDiv">
            <img className="landingImage1" id="hidden" src="https://cdn.evbstatic.com/s3-build/fe/build/images/baedf009bb329458ae80eb599fb8a4d5-3_tablet_1067x470.jpg"/>
            <img className="landingImage2" id="hidden" src="https://cdn.evbstatic.com/s3-build/fe/build/images/f1333e94d21e22dca2e3597bf2b4a86c-3_mobile_659x494.jpg"/>
       
        </div>
        
                
    </div>
    

    
);
}