import React from 'react';
import {Person} from "../App";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props{
    persons: Person[]
}

function PeopleList({persons}: Props) {

    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">City</th>
            </tr>
            </thead>

            {persons.map((person) => (
                <tbody key={person.id}>
                <tr>
                    <th scope="row">{person.id}</th>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.city}</td>
                </tr>
                </tbody>
            ))}


        </table>
    );
}

export default PeopleList;