import React from 'react';
import Card from './Card';
						// mapping over the robot object to return multiple component 


// destructuring the robots prop to CardList parameters below

// The code below explains a cardList compnet that displays cards
const CardList = ({ robots }) => {
	return (
			<div>
					{
						robots.map((user, i) => {
							return (
								<Card
								// key prop for react virtual dom identification of each item
									key={i}
									id={robots[i].id}
									name={robots[i].name}
									email={robots[i].email}
								/>
							);
						})
					}
			</div>
	);
}
// exporting the CardList component 
export default CardList;
