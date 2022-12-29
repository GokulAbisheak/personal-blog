import React from "react";
import cover from "../assets/images/cover.png"

function Homepage() {
    return (
        <div id="home" class="homepage-image">
            <img src={cover} />
            <div class="text-over-image">
                <h5 style={{margin: "0", marginLeft: "3px"}}>Hey! I am</h5>
                <h1 style={{margin: "0"}}>Gokul Abisheak</h1>
                <h6 style={{margin: "0", marginLeft: "3px", marginTop: "5px"}}>Software Engineering Undergraduate at SLIIT </h6>
                <a href="#about"><button>Discover</button></a>
            </div>
        </div>
    )
}

export default Homepage;