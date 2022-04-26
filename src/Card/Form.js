import React, {useState} from "react"

function CardForm({onSubmit, onDone, buttonLabel, label, deckName= "Loading...", 
initialState}){
    const [card, setCard] = useState(initialState);

function changeHandler({ target: { name, value} }){    
setCard((previous) => ({
    ...previous,
    [name]: value,
}));
}

function submitHandler(event){
    event.preventDefault();
    event.stopPropagation();
    onSubmit({...card});
    setCard({ front: "", back: ""});
}


/*render the form for adding a card, to be used with the createCard component. 
include two text-areas for the front and back of the card with fieldsets for the front and back respectively.
display the deck name with "add a card" in the form legend. Add a submit button which activates the submit handler from createCard, and a second button for done, 
which uses the doneHandler to return to the deckscreen (from createCard)*/
return (
    <form onSubmit={submitHandler} className="card-form">
        <fieldset>
                    <legend>{label}</legend>

            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea
                id="front"
                name="front"
                className="form-control"
                required={true}
                placeholder="Front side of the card"
                value={card.front}
                onChange={changeHandler}
                />
            </div>
            <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
        id="back"
        name="back"
        className="form-control"
        required={true}
        placeholder="Back side of the card"
        value={card.back}
        onChange={changeHandler}
        buttonLabel="Done"
        />
            </div>
<button
className="btn btn-secondary mr-2"
onClick={onDone}
>
{buttonLabel}
</button>
<button type="submit" 
className="btn btn-primary" 
> Save
</button>
        </fieldset>
    </form>
)
}
export default CardForm;

  
    

    