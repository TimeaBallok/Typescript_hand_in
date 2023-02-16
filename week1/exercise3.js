// a) Change the code to ES6 classes. You should use constructors, the super and extend keyword.

class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate; //"01/01/2015"
    }

    toString(){
        return `Employee: ${this.name}, Salary: ${this.salary}, Hire Date: ${this.hireDate}`;
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged) {
        super(name, salary, hireDate);
        this.jobTitle = jobTitle;
        this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
        this.employeesManaged = employeesManaged;
    }

    toString(){
        return `${super.toString()}\nJob Title: ${this.jobTitle}, Description of Job: ${this.descriptionOfJob}, Employees Managed: ${this.employeesManaged}`;
    }
}

class Department extends Manager {
    constructor(jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
        super(jobTitle, descriptionOfJob, employeesManaged)
        this.departmentName = departmentName;
        this.employees = employees; // ["Steve", "Marc"]
    }

    toString(){
        return `${super.toString()}\nDepartment Name: ${this.departmentName}, Employees: ${this.employees}`;
    }
}

// b) Create a toString() function for each of the Employee, Manager and Department class using the template literal.
// In the toString() remember to call the super.toString() method to get the parent class properties.

console.log("\n")
const emloyee1 = new Employee('Steve Taylor', 50000, '01/01/2015')
//console.log(emloyee1.toString())
const manager = new Manager(emloyee1.name, emloyee1.salary, emloyee1.hireDate, "Manager", "Manager of the Sales Department", 2)
console.log(manager.toString())
const department = new Department(manager.jobTitle, manager.descriptionOfJob, manager.employeesManaged, "Sales", "Steve, Marc")
//console.log(department.toString())


// c) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of)
console.log("\n")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of numbers) {
    console.log(element);
}

console.log("\n")
const employee = new Employee("Steve Taylor", 50000, "01/01/2015");
for (const prop in employee) {
    console.log(`${prop} = ${employee[prop]}`);
}


// da) Change the calculator function to an arrow function.
// db) Change the function to a one line function by use the implicit return.
// dc) Create a default value for one of the parameters.
// dd) Use the rest operator to change the function to accept any number of parameters.

const calculator =  (num1, num2) => {
    return num1 + num2;
}

const calc = (num1, num2) => num1 + num2

const calc2 = (num1, num2=4) => num1 + num2

const calc3 = (...numbers) => {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

// e) Use destructuring to get the jobTitle and descriptionOfJob properties from the manager object.
console.log("\n")
const { name, salary, hireDate, jobTitle, descriptionOfJob } = manager;
console.log(jobTitle)
console.log(descriptionOfJob)