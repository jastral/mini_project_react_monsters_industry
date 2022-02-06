import React from "react";
import './card.style.css';

export const Card = (props) => {
    return(
        <div className="card-container">
            {/* &size=180x180  ->  this is parameter that i added extra to change the size of the coming image */}
            <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set4&size=180x180`} />
            <h2>{ props.monster.name }</h2>
            <p>{ props.monster.email }</p>
        </div>
    )
}