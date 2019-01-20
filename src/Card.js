// importing React library
import React from 'react';

// receiving props and destructuring them in the parameter bracket
const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt="robots" src={`https://robohash.org/${id}?200X200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    ); 
}
export default Card;