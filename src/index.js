import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Father of other components
import App from './App';
// importing CardList component which is a parent of card componentimport CardList from './CardList';
// import CardList from './CardList';
//importing the card component
import * as serviceWorker from './serviceWorker';
// importing tachyons for styling 
import 'tachyons';
//destructuring import from robot.js because the its not the default export from robot.js
// import { robots } from './Robots';   

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
 