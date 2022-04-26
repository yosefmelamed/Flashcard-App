import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import { readCard, readDeck, updateCard, } from "../utils/api";
import CardForm from "./Form";
/*function for editing a card. Use use params to get the deck and card id. 
declare state props for the deck and card to be edited, using the deck and card information from
readDeck and readCard(from utils)*/
function EditCard({title}){
const history = useHistory();
const {deckId, cardId} = useParams();

const [card, setCard] = useState({ front: "", back: ""});
const [deck, setDeck] = useState({ cards: [] });

useEffect(()=>{
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
}, [deckId, cardId]);

//submit handler for submitting the edit

  function submitHandler(card) {
      updateCard(card).then(finishHandler);
  }

//finish handler using history to go back to the deckscreen; to be used witrh the done button
  
function finishHandler(){
      history.push(`/decks/${deck.id}`);
  }

/*declare a new prop "item" to reuse cardForm and render the current card with previously saved information (the card prop)
the submitHanler will update the previous information. Use the label prop to 
substitute "add card" for "edit card" and "Done" for "Cancel" in the buttonLabel prop*/
  
  const item = card.id ? (
      <CardForm
      onSubmit={submitHandler}
      onDone={finishHandler}
      deckName={deck.name}
      initialState={card}
      buttonLabel={`Cancel`}
      label={`Edit Card`}
      />
  ) : (
      <p>Loading...</p>
  );

/*render the edit navigation including a link to home, the name of the deck (with a link back to the deck)  
and text "Edit card" with the proper Id. Don't forget to include the form prop (item) at the end!*/
 return (
     <>
     <nav aria-label="breadcrumb">
         <ol className="breadcrumb">
             <li className="breadcrumb-item">
                 <Link to="/">
                     <span className="oi oi-home" /> Home
                 </Link>
             </li>
             <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
         </ol>
     </nav>
     
     {item}
     </>
 );
}
//render through the appropriate link (/decks/:deckId/cards/:cardId/edit) from the layout index file
export default EditCard;
