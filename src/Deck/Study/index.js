//fix up

import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyNotEnough from "./StudyNotEnough";
import StudyCard from "./StudyCard";

export default function Study() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "Loading...", cards: [] });
  const [cardNumber, setCardNumber] = useState(1);
  const history = useHistory();

//use useEffect to get the deck information based on the Id; get the Id with useParams
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);

  const cardCount = deck.cards.length;
  //declare a variable based on the card number and amount of cards in the deck
  const cardTitle = `Card ${cardNumber} of ${cardCount}`;
  //declare a variable to display the card, minus 1 because an array starts at [0].
  const card = deck.cards[cardNumber - 1];

  /*create a next button handler to propmt the user to restart the cards after the last card 
  and print an error message if there are less than three cards*/
  const nextHandler = () => {
    if (cardNumber === cardCount) {
      const returnHome = window.confirm(
        "Reset cards?\n\nClick 'cancel' to return to the home page."
      );
      return returnHome ? setCardNumber(1) : history.push("/");
    }
    setCardNumber((prevState) => Math.min(cardCount, prevState + 1));
  };

  return cardCount <= 2 ? (
    <main className="container study-page">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: Study</h1>
      <StudyNotEnough deckId={deckId} cardCount={cardCount} />
    </main>
  ) : (
    <main className="container study-page">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Study
          </li>
        </ol>
      </nav>
      <h1>{deck.name}: Study</h1>
      <StudyCard card={card} title={cardTitle} nextHandler={nextHandler} />
    </main>
  );
}