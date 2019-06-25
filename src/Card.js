import React from 'react';
import './Card.css';

const Card = ({title, description, id, deleteIdea}) => {
    return (
        <section className="card">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => deleteIdea(id)}>❌</button>
        </section>
    )
}

export default Card;