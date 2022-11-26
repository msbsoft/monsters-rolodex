import "./card.style.css"

const Card = (props) => {

    return (
        <div key={props.monster.id} className="card-container">
            <h1>{props.monster.name}</h1>
        </div>
    )
}

export default Card