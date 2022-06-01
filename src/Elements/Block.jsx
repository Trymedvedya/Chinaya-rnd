import React from "react";
import "./Block.css"

const Block = function (props) {

    return(
        <div onClick={props.renderer}  id="first">
          <img src={props.surs} alt="" />
        <h1 id="second">{props.name}</h1>
    </div>
    )
}
export default Block
//style={{backgroundImage:`url(${props.surs})`}}