import React from "react"
import "./card-list.style.css"

const CardList = (props) =>{

    return (
        <div className="card-list">
            {props.children.map(i => <div className="card">{i}</div>)}
        </div>
    )
}

export default CardList;