import express = require("express")
import morgan = require("morgan")
import fs from "fs"
// @ts-ignore
import data from './people.json'
import {json} from "express";

const app = express()
console.log(process.env)

interface Person {
    id: number
    name: string
    age: number
    city: string
}

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    console.log('Development mode')
    console.log(__dirname)
}

app.use(express.json()) // body parser for JSON data
app.use(express.static(`${__dirname}/public`))      // http://localhost:3000/homepage.html

app.get("/", (req, res) => {
    res.status(200)
        .json({
            status: "succes",
            message: "Hello world"
        })
})

app.get('/people', (req, res) => {
    fs.readFile('./people.json', 'utf8', (err, data) => {
        if (err) throw err;
        const people = JSON.parse(data);
        res.setHeader('Content-Type', 'application/json');
        res.send(people);
    });
});

app.get("/people/:id", (req, res) => {
    fs.readFile('./people.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const people = JSON.parse(data);
        const id = parseInt(req.params.id);
        const filteredPeople = people.filter((person: any) => person.id == id);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(filteredPeople))
    });
});

app.post('/people', (req, res) => {
    fs.readFile('people.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        const newPerson: Person = req.body;
        const people: Person[] = JSON.parse(data.toString());
        const newPersonId: number = people.length > 0 ? people[people.length - 1].id + 1 : 1;

        const personToAdd: Person = { ...newPerson, id: newPersonId };
        const updatedPeople: Person[] = [...people, personToAdd];

        fs.writeFile('people.json', JSON.stringify(updatedPeople), (err) => {
            if (err) {
                res.status(500).send('Error writing file');
                return;
            }

            res.send(`Person with ID ${newPersonId} added`);
        });
    });
});

app.delete('/people/:id', (req, res) => {
    fs.readFile('./people.json', 'utf8',(err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }
        const id = parseInt(req.params.id);
        const people = JSON.parse(data.toString());
        const filteredPeople = people.filter((person: Person) => person.id !== id);

        fs.writeFile('./people.json', JSON.stringify(filteredPeople), (err) => {
            if (err) {
                // Handle error
                res.status(500).send('Error writing file');
                return;
            }
            res.send(`Person with ID ${id} deleted`);
        });
    });
});

app.put('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedPerson: Person = req.body;

    fs.readFile('./people.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        const people: Person[] = JSON.parse(data.toString());
        const updatedPeople: Person[] = people.map((person: Person) => {
            if (person.id === id) {
                return {
                    ...person,
                    ...updatedPerson,
                    id
                };
            } else {
                return person;
            }
        });

        fs.writeFile('./people.json', JSON.stringify(updatedPeople), (err) => {
            if (err) {
                res.status(500).send('Error writing file');
                return;
            }

            res.send(`Person with ID ${id} updated`);
        });
    });
});

app.patch('/people/:id', (req, res) => {
    const id = parseInt(req.params.id);

    fs.readFile('./people.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading file');
            return;
        }

        const people: Person[] = JSON.parse(data.toString());
        const updatedPeople: Person[] = people.map((person: Person) => {
            if (person.id === id) {
                return {
                    ...person,
                    ...req.body,
                    id
                };
            } else {
                return person;
            }
        });

        fs.writeFile('./people.json', JSON.stringify(updatedPeople), (err) => {
            if (err) {
                res.status(500).send('Error writing file');
                return;
            }

            res.send(`Person with ID ${id} updated`);
        });
    });
});

app.listen(3000, () => {
    console.log("Server is listening")
})