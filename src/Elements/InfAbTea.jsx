import React from "react";
import "./InfAbTeaStyle.css";
const InfAbTea = function (props) {
    return (
        <div class="maun">

            <div class="banner_img">
                <img src={props.sourceInf} alt=""></img>
            </div>
            <div class="inf">
                <div class="infHeader">
                    <div class="header">
                        <h1 >{props.mainTeaName}</h1>

                        <h2>{props.categoryOfTea}</h2>

                    </div>
                    <div class="pp">
                        <p >{props.textAbTea}</p>
                    </div>
                </div>
                <div class="particles">

                    <ul class="information">
                        <caption><h1 class="grey">прожарка</h1></caption>
                        <li><h2>{props.teaFlame}</h2></li>
                    </ul>
                    <ul class="information">
                        <caption><h1 class="grey">вкус</h1></caption>
                        <li><h2>{props.tasteOne}</h2></li>
                        <li><h2>{props.tasteTwo}</h2></li>
                        <li><h2>{props.tasteThree}</h2></li>
                    </ul>
                    <ul class="information">
                        <caption><h1 class="grey">провинция</h1></caption>
                        <li><h2>{props.region}</h2></li>

                    </ul>
                    <ul class="information">
                        <caption><h1 class="grey">эффект</h1></caption>
                        <li><h2>{props.effect}</h2></li>
                    </ul>
                    <ul class="information">
                        <caption><h1 class="grey">заварка</h1></caption>
                        <li><h2>{props.temperatureTea}</h2></li>
                        <li><h2>{props.stepTemperatureTea}</h2></li>
                    </ul>
                    <ul class="information">
                        <caption><h1 class="grey">посуда</h1></caption>
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