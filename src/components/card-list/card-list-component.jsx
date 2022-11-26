import React from "react"
import "./card-list.style.css"

const CardList = (props) =>{

    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <div className="card" key={monster.id}>
                    {monster.name}
                </div>
            ))}
        </div>
    )
}

export default CardList;