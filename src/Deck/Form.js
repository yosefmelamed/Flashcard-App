import React, {useState} from "react";
 function DeckForm({
     onSubmit, onCancel, label, initialState= {name: "", description: ""},
 }) {
     const [deck, SetDeck] = useState(initialState);
 
function changeHandler({ target: { name, value}}){
    SetDeck((previous) => ({
        ...previous,
        [name]: value,
    }));
} 

function submitHandler(event){
    event.preventDefault();
    event.stopPropagation();
    onSubmit(deck);
}

return (
    <>
<form onSubmit={submitHandler} className="deck-edit">
<fieldset>{label}
<div className="form-group">
    <label htmlFor="name">Name</label>
    <input
    type="text"
    id="name"
    name="name"
    className="form-contol"
    value={deck.name}
    required={true}
    placeholder="Deck Name"
    onChange={changeHandler}
    />
</div>
<div className="form-group">
<label htmlFor="decription">Description</label>
    <textarea
    id="description"
    name="description"
    className="form-control"
    rows="4"
    required={true}
    placeholder="Brief description of the deck"
    value={deck.description}
    onChange={changeHandler}
    />
</div>
<button type="submit" className="btn btn-secondary mr-2"
onClick={onCancel}>Cancel</button>
<button type="submit" className="btn btn-primary" >Submit</button>
</fieldset>
</form>
  </>
);
 
    }
export default DeckForm;


 


  
         
      