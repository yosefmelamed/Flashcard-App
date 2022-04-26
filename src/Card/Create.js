import React, {useEffect, useState} from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./Form";

/*function for accessing the deck information and appropriate handlers to be passed to CardForm component
plus navigation bar for the creare card screen. Uses the create card function from the utlities folder,
useHistory and useParams to access and navigate the history and access the deckId */
 function CreateNewCard(){
    const history = useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({cards: []});


//use readDeck to set the current deck to the corresponding id.    
    useEffect(() => {
    readDeck(deckId).then(setDeck);
    }, [deckId]);


// use the createCard function to add the card to the deck when the form is submitted (the button  is at the end of cardForm)   
    function submitHandler(card){
        createCard(deckId, card);
    }

//return to the deck page when the done button(at the end of cardForm) is pushed using history.push
    function finishHandler(){
        history.push(`/decks/${deckId}`);
    }

 //render breadcrumb navigation containing links to home, back to the deck display, and addcard text
 //pass down the neccesary props to the cardForm component 
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
            <Link to={`/decks/${deckId}`}>
                    {deck.name}
                </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            Add Card</li>
            </ol>
</nav>
<CardForm
deckName={deck.name}
initialState={deck}
onSubmit={submitHandler}
onDone={finishHandler}
label={`${deck.name}: Add a Card`}
buttonLabel={`done`}
/>
</>
)
}
//render through the appropriate link (/decks/:deckId/cards/new) from the layout index file
export default CreateNewCard;
