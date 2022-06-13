import React from "react";
import "./InfAbDishes.css";
const InfAbDishes = function (props) {
    return (

<div className="maun">
    

            <div className="banner_img">
                <img src={`data:image/png;base64,${props.sourceInfImg}`} alt=""></img>
            </div>
            <div className="inf">
                <div className="infHeader">
                    <div className="header">
                        <h1 >{props.mainDishesName}</h1>

                        <h2>{props.categoryOfDishes}</h2>

                    </div>
                    <div className="pp">
                        <p >{props.textAbDishes}</p>
                    </div>
                </div>
                <div className="particles">

                    <ul className="information">
                        <caption><h1 className="grey">Материал</h1></caption>
                        <li><h2>{props.dishesMaterial}</h2></li>
                    </ul>
                </div>
            </div>
            </div>       
    )
}
export default InfAbDishes