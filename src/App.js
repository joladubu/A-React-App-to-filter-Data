import React, { Component } from 'react';
import CardList from './CardList';
// import { robots } from './robots';
// SearchBox Component
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component { 
    // declaring a state
    constructor() {
        super() // calling the constructir of component
        this.state = {  // states are robots and search field & are both changeab;
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        //fetching the users
        fetch('https://jsonplaceholder.typicode.com/users')
        // converting response to json
            .then(res => res.json())
        // getting the users and updating with setState
            .then(users => this.setState({ robots: users }));
    }
    onSearchChange = (event) => {
        // Changing the state with this.setState so the search field always gets updated
        this.setState({ searchfield: event.target.value })
    }
    render() {
        const filteredRobots = this.state.robots.filter(robots=>{
            //changing the robots according to data entered into search field
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else{
            return(
                // className of tc is to align text to center
                <div className="tc"> 
                    <h1 className="f1">Robo Friends</h1>
                    {/* search box component */}
                    <SearchBox searchChange={this.onSearchChange}/> 
                    {/* robot which is a test is now pased down as props */}
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
}
    

export default App;