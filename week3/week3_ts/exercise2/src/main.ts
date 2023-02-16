import './style.css'
import Person from "./person";
import getPeople from "./people";
import {renderPeopleList} from "./peopleList";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div id="person">
    
    </div>
`

const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.age); // 30
john.incrementAge();
console.log(john.age); // 31
john.setSalary(100000);
console.log(john.getSalary()); //100000
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 100000$"

const people = getPeople().then(data =>{
    return data
})
renderPeopleList(document.querySelector<HTMLDivElement>('#person')!, await people)

