import React from 'react';
import classes from '.Persons/Person/Person.css';
//import Radium from 'radium';
import styled from 'styled-components';
import Person from './Persons/Persons';

/*const StyleDiv = styled.div`
            width: 60%;
            margin: 16px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;

            @media (min-width: 500px) {
                    width: 450px;
                }
        `;*/

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.changed(event, person.id)}
    />
});
    /*const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };*/

    /*return (
        <div className='Person'>
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age} years old!
            </p>
        <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>*/
/*    )
}
*/
export default persons;