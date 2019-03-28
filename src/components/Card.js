import React from 'react'
import './card.css'

const Card = ({title, text, image}) => {
    return (
        <div className="card">
            <img src={image} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card