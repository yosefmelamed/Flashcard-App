import React, {useEffect, useState} from "react";
/*function to "flip the cards". Use state to set the card as flipped or not with the flipHandler,
and the cardView as front or back based on the state of flipped, using the back and front ids from the db.json card objects */
const nextView = {
    front: "back",
    back:  "front" 
};


function StudyCard({card= {}, title, nextHandler}){

const [view, setView] = useState("front");
const [flipped, setFlipped] = useState(false);

function flipHandler(){
    setView((previous) => nextView[previous]);
    console.log(nextView)
    setFlipped(true);
}
console.log(view)
console.log(flipped)
console.log(nextView)

useEffect(() =>{
    setView("front");
    setFlipped(false);
}, [card]);

console.log(view)
console.log(flipped)
console.log(nextView)

return (
    <div className={`card ${view} study-card`}>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{card[view]}</p>
            <button
            type="button"
            className="btn btn-primary"
            onClick={flipHandler}
            >Flip</button>
            {flipped && (
                <button
                type="button"
                className="btn btn-primary"
                onClick={nextHandler}
                >Next</button>
            )} 
        </div>
    </div>
)

}
export default StudyCard;

   