import React from "react";
import "./InfAbTeaStyle.css";
const InfAbTea = function (props) {
    return (
        <div className="maun">

            <div className="banner_img">
                <img src={props.sourceInf} alt=""></img>
            </div>
            <div className="inf">
                <div className="infHeader">
                    <div className="header">
                        <h1 >{props.mainTeaName}</h1>

                        <h2>{props.categoryOfTea}</h2>

                    </div>
                    <div className="pp">
                        <p >{props.textAbTea}</p>
                    </div>
                </div>
                <div className="particles">

                    <ul className="information">
                        <caption><h1 className="grey">прожарка</h1></caption>
                        <li><h2>{props.teaFlame}</h2></li>
                    </ul>
                    <ul className="information">
                        <caption><h1 className="grey">вкус</h1></caption>
                        <li><h2>{props.tasteOne}</h2></li>
                        <li><h2>{props.tasteTwo}</h2></li>
                        <li><h2>{props.tasteThree}</h2></li>
                    </ul>
                    <ul className="information">
                        <caption><h1 className="grey">провинция</h1></caption>
                        <li><h2>{props.region}</h2></li>

                    </ul>
                    <ul className="information">
                        <caption><h1 className="grey">эффект</h1></caption>
                        <li><h2>{props.effect}</h2></li>
                    </ul>
                    <ul className="information">
                        <caption><h1 className="grey">заварка</h1></caption>
                        <li><h2>{props.temperatureTea}</h2></li>
                        <li><h2>{props.stepTemperatureTea}</h2></li>
                    </ul>
                    <ul className="information">
                        <caption><h1 className="grey">посуда</h1></caption>
                        <li><h2>{props.dishesOne}</h2></li>
                        <li><h2>{props.dishesTwo}</h2></li>
                        <li><h2>{props.dishesThree}</h2></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default InfAbTea