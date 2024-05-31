import ReactDOM from "react-dom";
import React from "react";



const Header = ()=>{
    return(
        <div className="header">
                <div className="logo-container">
                     <img className="logo"
                     src="https://img.freepik.com/premium-photo/anime-girl-eating-bowl-noodles-with-chopsticks-generative-ai_958124-30479.jpg?w=1060">
                     </img>
                </div>

            <div className="nav-items" >
                <ul >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>🛒</li>
                </ul>
            </div>

        </div>
    )


    const RestaurantCard = () =>{
        return(
            <div className="res-card">

            </div>
        )
    } 
}

    const Body = ()=> {
        return (
            <div className="body">
                <div className="Search">Search</div>
                <div className="res-container">

                </div>

            </div>
        )
    }


const AppLayout = ()=>{
    return(

        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)