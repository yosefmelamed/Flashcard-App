import React, {useEffect, useState} from "react";
import {useHistory, Link, useParams} from "react-router-dom";
import { deleteCard, deleteDeck, readDeck } from "../utils/api";
import CardList from "../Card/List";

function DeckView(){
const {deckId} = useParams();
const [deck, setDeck] = useState({ cards: [] });
const history = useHistory();


const loadDeck = () => {
    readDeck(deckId).then(setDeck);
}

useEffect(loadDeck, [deckId]);


//use window.confirm to display a warning message before deleting a deck
const handleDelete = () => {
const confirmed = window.confirm(
    "Are you sure you want to delete this deck?\n\nOnce you delete it you will not be able to recover it!!"
);
//if yes then pass to the deleteDeck function and return to the deck view
if(confirmed){
    deleteDeck(deck.id).then(() => history.push("/decks"));
}
};

//use window.confirm to display a warning message before deleting a card
const deleteCardHandler = (cardId) => {
    const confirmed = window.confirm(
        "Are you sure you want to delete this card?\n\nOnce you delete it you will not be able to recover it!!"  
    );

//if yes then pass to the deleteCard function and save the delete with loadDeck    
    if(confirmed){
        deleteCard(cardId).then(loadDeck);
    }
};

//render the deckview. Includes a delete button with a trash icon, to use with the delete handler.
return (
<main className="container deck-view">
<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li className="breadcrumb-item">
            <Link to="/">
                <span className="oi oi-home" />
            </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
            {deck.name}
        </li>
    </ol>
</nav>

<div className="media mb-2">
    <div className="media-body">
        <h5 className="mt-0">{deck.name}</h5>
        {deck.description}
    </div>
</div>
<Link to={`/decks/${deck.id}/edit`}
      className="btn btn-secondary mr-2"
      title="Edit deck"
      >
          <span className="oi oi-pencil" />Edit
      </Link>

      <Link to={`/decks/${deck.id}/study`}
      className="btn btn-secondary mr-2"
      title="Study deck"
      >
          <span className="oi oi-book" />Study
      </Link>

      <Link to={`/decks/${deck.id}/cards/new`}
      className="btn btn-primary"
      title="Add card"
      >
          <span className="oi oi-plus" />Add Cards
      </Link>
      <button className="oi oi-trash" onClick={handleDelete} />
      <CardList deck={deck} onCardDelete={deleteCardHandler} />
</main>

);
}
export default DeckView;


      
      
   
      