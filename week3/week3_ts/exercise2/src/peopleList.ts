import Person from "./person";

export function renderPeopleList(container: HTMLElement, people: Person[]) {
    people.map(person => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h2 class="person__name">${person.name}</h2>
        <p class="person__occupation">${person.occupation}</p>
        <p class="person__age">${person.age}</p> `
        container.appendChild(div)
    });
}