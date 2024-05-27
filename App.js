import ReactDOM from "react-dom";
import React from "react";



const Header = ()=>{
    return(
        <div>
            
        </div>
    )
}


const AppLayout = ()=>{
    return(

        <div>
            <h1>Hello from JS</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)