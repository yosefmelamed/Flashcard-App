import React from "react";
import { Link } from "react-router-dom";

/*function for displaying the cards in from the deck view (decks/:Id).
use columns and rows from bootstrap. Include edit and delete buttons for each card, 
and import the deck prop from deckList (in the deck folder) to complete the deck view*/
function CardList({deck, onCardDelete}){


const {cards= [] } = deck;

//don't forget to add the return inside of the map or you will get an error
const list = cards.map((card) =>{
    return(
     <li key={card.id} 
    className="list-group-item list-group-item-action flex-column align-items-start"
    >
<div className="row">
    <div className="col-md-10">
        <div className="row">
            <div className="col">{card.front}</div>
            <div className="col">{card.back}</div>
        </div>
    </div>
    <div className="col text-right">
        <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}
        className="btn btn-secondary mr-2"
        title="Edit card"
        >
            <span className="oi oi-pencil" />Edit
        </Link>
        <button className="btn btn-danger" title="Delete Card">
            <span className="oi oi-trash"
            onClick={() => onCardDelete(card.id)}
            />
        </button>
    </div>
</div>
</li>
)});

return (
    <div className="mt-4 card-list">
        <h3>Cards</h3>
        <ul className="list-group">{list}</ul>
    </div>
);

}

export default CardList;

