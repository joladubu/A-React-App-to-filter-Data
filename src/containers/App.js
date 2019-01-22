import React, { Component } from 'react';
import { connect } from 'react-redux';  
import CardList from '../components/CardList';
// import { robots } from './robots';
// SearchBox Component
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField } from '../actions';


const mapStateToProps = state => {
    return {
        searchField : state.searchField 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange : (event) =>dispatch(setSearchField(event.target.value)) 
    }
}
class App extends Component { 
    // declaring a state
    constructor() {
        super() // calling the constructir of component
        this.state = {  // states are robots and search field & are both changeab;
            robots: [],
            // searchfield: ''
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
    
    render() {
        // Using Object Destructuring
        const { robots } = this.state;
        const { searchField, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot=>{
            //changing the robots according to data entered into search field
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // checking the robots returned using ternary operator
        return !robots.length ? 
            <h1>Loading...</h1> :
            (
                // className of tc is to align text to center
                <div className="tc"> 
                    <h1 className="f1">Robo Friends</h1>
                    {/* search box component */}
                    <SearchBox searchChange={onSearchChange}/> 
                    {/* robot which is a test is now pased down as props */}
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(App);