import React from 'react';
import {Person} from "../App";

interface Props {
    persons: Person[]
    setPersons:  React.Dispatch<React.SetStateAction<Person[]>>
}

function DeletePerson({persons, setPersons}: Props) {

    const remove = () => {
        setPersons(
            persons.filter((person) => person.id !== persons.length)
        )
    }

    return (

            <button
                className="Delete-btn"
                onClick={remove}>
                Remove from list
            </button>

    );
}

export default DeletePerson;