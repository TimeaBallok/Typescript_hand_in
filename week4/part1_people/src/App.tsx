import {useEffect, useState} from 'react'
import './App.css'
import PeopleList from "./components/PeopleList";
import AddPerson from "./components/AddPerson";
import DeletePerson from "./components/DeletePerson";


export interface Person {
        id: number
        name: string
        age: number
        city: string
}

function App() {

    const [persons, setPersons] = useState<Person[]>([])

    useEffect(() => {
        fetchPeople()
    },[])

    const fetchPeople = async() => {
        const people = await fetch("http://localhost:3001/person");
        const data = await people.json();
        setPersons(data);
        console.log("Hello")
        console.log(persons)
    }

  return (
    <div className="App">
        <PeopleList persons={persons} />
        <AddPerson persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App
