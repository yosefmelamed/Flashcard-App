//import DeckList to display the deck list
import DeckList from "./Deck/List";
import { Link } from "react-router-dom";
import React from "react";


/* create link and button  and (from the bootstrap button class) linking  to the create deck component
and render the decklist from the decklist component, which will contain additional links and buttons */
export default function Home() {
  return (
    <>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <DeckList />
    </>
  );
}