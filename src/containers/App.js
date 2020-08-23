import React, { useState, Component } from 'react';
//import logo from './logo.svg';
import classes from '.containers/App.css';
//import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons'
import { render } from 'react-dom';
import person from '../../components/Persons/Persons';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

const StyledButton = styled.button`
            background-color: ${props => props.alt ? 'red' : 'green'};
            color: white;
            font: inherit;
            border: 1px solid blue;
            padding: 8px;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.alt ? 'salmon' : 'green'};
                color: black;
            }
        `;

class App extends Component {
    state = {
        persons: [
            { id: 'asdads1', name: 'Max', age: 28 },
            { id: 'asdads2', name: 'Manu', age: 29 },
            { id: 'asdads3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    //console.log(personsState);

    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} )
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
   
        /*const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }*/
        /*};*/

        let persons = null;
        let btnClass = [ classes.Button ];

        if (this.state.showPersons) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    /> 
                </div>
            );

           /* style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'salmon',
                    color: 'black'
            }*/
            btnClass = [ classes.Red ];
        }

        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red); //classes will be red
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold); //classes = ['red', 'bold']
        }

        return (
            /* <StyleRoot>*/
            <div className={classes.App}>
                    <h1>Hi, I'm a React App. </h1>
                    <p className={ assignedClasses.join(' ') }> Is this working? </p>
                    <button
                    className={btnClass.join(' ')}
                    /*alt={ this.state.showPersons}*/
                    onClick={this.togglePersonsHandler}>
                        Toggle Persons
                    </button>
                    {persons}
                </div>
            /*</StyleRoot>*/
        );

    }
}

export default App;