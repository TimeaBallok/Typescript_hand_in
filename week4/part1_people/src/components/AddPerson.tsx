import React, {useState} from 'react';
import {Person} from "../App";
import DeletePerson from "./DeletePerson";

interface Props {
    persons: Person[]
    setPersons:  React.Dispatch<React.SetStateAction<Person[]>>
}

function AddPerson({persons, setPersons}: Props) {

    const [input, setInput] = useState({
        id: persons.length + 1,
        name: "",
        age: "",
        city: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const addTo = () => {
        console.log(input)
    setPersons([
            ...persons,
            {
                id: persons.length + 1,
                name: input.name,
                age: parseInt(input.age),
                city: input.city
            }
        ])
        console.log(persons)
        setInput({
            id: 0,
            name: "",
            age: "",
            city: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
                name="name"
            />

            <input
                type="text"
                placeholder="age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange}
                name="age"
            />

            <input
                type="text"
                placeholder="city"
                className="AddToList-input"
                value={input.city}
                onChange={handleChange}
                name="city"
            />

            <button
                className="AddToList-btn"
                onClick={addTo}>
                Add to list
            </button>

            <DeletePerson persons={persons} setPersons={setPersons} />
        </div>
    );
}

export default AddPerson;