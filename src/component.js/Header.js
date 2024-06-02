import { useState } from "react";
import { LOGO_URL } from "../../utils/constant";

const Header = ()=>{
    let [btnName, setBtnName] = useState("Login");

    return(
        <div className="header">
                <div className="logo-container">
                     <img className="logo"
                     src= {LOGO_URL}
                     >
                     
                     </img>
                     <h1>Oishii des</h1>
                </div>

            <div className="nav-items" >
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>🛒</li>
                    <li>
                             <button
                                className="login"
                                onClick={()=> {  
                                    btnName === "Login"
                                    ? setBtnName("Logout")
                                    : setBtnName("Login")
                                }}
                                > {btnName}
                             </button>
                    </li>
                </ul>
                
            </div>

        </div>
    )


   
}

export default Header;