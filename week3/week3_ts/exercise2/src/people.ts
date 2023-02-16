import Person from './person';
import data from "./data.json"

export default function getPeople(): Promise<Person[]>{
    return new Promise((resolve, reject) => {
        let people: Person[] = []
        data.forEach(person => {
            const newPerson = new Person(person.name, person.age, person.occupation)
            people.push(newPerson)
        });
        resolve(people);
        reject('Error')
    })
}