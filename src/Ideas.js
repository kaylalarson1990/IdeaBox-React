import React from 'react';
import Card from './Card.js';
import './Ideas.css';

const Ideas = ({ ideas, deleteIdea }) => {
    const ideaCards = ideas.map(idea => {
        return(
            <Card 
                key={ idea.id }
                title={ idea.title }
                description={ idea.description }
                id={ idea.id }
                deleteIdea={ deleteIdea }
            />
        )
    })

    return (
        <>
            <h2>Idea Components</h2>
            <section className="ideas">
              { ideaCards }
            </section>
        </>
    )
}

export default Ideas;