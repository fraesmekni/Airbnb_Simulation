import React from "react";
import airbnb from "../ABNB_BIG.png"
import nav from "../components/nav.css"
export default function Navbar(){
    return(
        <nav>
            <img src={airbnb} alt="aibnb logo" className="nav--logo" />
        </nav>
    )
}