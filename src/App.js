import ReactDOM from "react-dom";
import React from "react";
import { useEffect } from "react";
import Header from "./component.js/Header";
import Body from "./component.js/Body";
import RestaurantCard from "./component.js/RestaurantCard";


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