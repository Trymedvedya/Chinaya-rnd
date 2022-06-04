import React from "react";
import "./Block.css";
import              { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
const Block = function (props) {

    return(
        <div onClick={props.renderer}  id="first">
          <img src={props.surs} alt="" />
        <h1 id="second">{props.name}</h1>
    </div>
    )
}
export default Block