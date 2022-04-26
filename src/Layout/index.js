import React from "react";
import Header from "./Header";
import DeckCreate from "../Deck/Create";
import CreateNewCard from "../Card/Create";
import DeckView from "../Deck/View";
import NotFound from "./NotFound";
import Home from "../Home";
import { Route, Switch } from "react-router-dom";
import DeckEdit from "../Deck/Edit";
import Study from "../Deck/Study";
import EditCard from "../Card/Edit";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
       <Switch>
         <Route path="/decks/new">
           <DeckCreate />
         </Route>
         <Route path="/decks/:deckId/study">
           <Study />
         </Route>
         <Route path="/decks/:deckId/edit">
           <DeckEdit />
         </Route>
         <Route path="/decks/:deckId/cards/new">
            <CreateNewCard />
          </Route>
         <Route path="/decks/:deckId/cards/:cardId/edit">
           <EditCard />
         </Route>
         <Route path="/decks/:deckId">
            <DeckView />
          </Route>
         <Route exact path="/decks">
           <Home />
         </Route>
         <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route>
          <NotFound />
          </Route>
          </Switch>
      </div>
    </>
  );
}

export default Layout;
