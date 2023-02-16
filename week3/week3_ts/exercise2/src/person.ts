export default class Person {
    name: string
    age: number
    occupation: string
    private salary: number

    public constructor(name: string, age: number, occupation: string) {
        this.name = name
        this.age = age
        this.occupation = occupation
        this.salary = 0;
    }


    public introduce() {
        return (`Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.salary}`)
    }

    public incrementAge(){
        this.age++;
    }

    public setSalary(salary: number){
        this.salary = salary;
    }

    public getSalary(): number{
        return this.salary
    }
}

