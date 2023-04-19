import express = require("express")
import morgan = require("morgan")
import fs from "fs"

const app = express()
console.log(process.env)

if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
    console.log('Development mode')
}

app.use(express.json()) // body parser for JSON data
app.use(express.static(`${__dirname}/public`))      // http://localhost:3000/homepage.html

// part1
app.get("/", (req, res) => {
    res.status(200)
        .json({
            status: "succes",
            message: "Hello world"
        })
})

// part2 with params
app.get("/hello/:name", (req, res) => {     // http://localhost:3000/hello?name=Timi
    res.status(200)
        .json({
            status: "succes",
            message: `Hello ${req.params.name}`
        })
})

// part3 with query
app.get("/hello", (req, res) => {       // http://localhost:3000/hello/timi
    res.status(200)
        .json({
            status: "succes",
            message: `Hello ${req.query.name}`
        })
})

// part4 with errors
app.get("/error", (req, res) => {
    try{
        throw new Error("Went Wrong")
        res.status(200)
            .json({
                status: "succes",
                message: "Hello world"
            })
    }catch(err: any){
        res.status(400)
            .json({
                status: "failed",
                message: err.message
            })
    }
})

// part5 with json
app.get("/data", (req, res) => {
    const data = fs.readFileSync('./data.json', 'utf-8')
    res.status(200)
        .header({
            "Content-Type": 'application/json',
            "Content-Length": data.length
        })
        .json({
            status: "succes",
            data: JSON.parse(data)
        })
})

// part 6 POST JSON data
app.post("/", (req, res) => {
    res.status(201)
        .json({
            status: "succes",
            data: {
                name: "Timi",
                age: 47
            }
        })
})

app.listen(3000, () => {
    console.log("Server is listening")
})