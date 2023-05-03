## Class Exercise 1

Look at the following javascript code:
```js 
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function greeting(name) {
    console.log(`Hello, ${name}!`);
    readline.close();
  }
  
  function processUserInput(callback) {
    readline.question(`What's your name? `, callback);
  }
  
  processUserInput(greeting);
````
1. Look at the code above and try to explain what the code does. (apart from the first 4 lines)
2. Run the processUserInput function with a different callback (use lambda here) to console.log the name in uppercase.
3. Run the processUserInput function with a different callback (use lambda here) to console.log the length of the name

## Class Exercise 2

Look at the following javascript code:
```js
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function operateOnNumbers(operator, x, y) {
  return operator(x, y);
}

console.log(operateOnNumbers(add, 3, 4));   // 7
console.log(operateOnNumbers(multiply, 3, 4));   // 12
````
1. Look at the code above and try to explain what the code does.
2. Run the operateOnNumbers function with a different operator (use lambda here) to subtract the numbers.
3. Based on above code example write a function that takes two functions and an array of numbers, and returns an array with the result of applying each function to each number in the array. E.g. lift to the power of 2 and then divide by 10 or something like that.


## Class Exercise 3 - ES6

a) Change the code to ES6 classes. You should use constructors, the super and extend keyword.

```js
function Employee(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate; //"01/01/2015"
}

function Manager(jobTitle, descriptionOfJob, employeesManaged) {
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob; //"Manager of the Sales Department"
    this.employeesManaged = employeesManaged;
}

function Department(departmentName, employees) {
    this.departmentName = departmentName;
    this.employees = employees; // ["Steve", "Marc"]
}

function Contract(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
    Employee.call(this, name, salary, hireDate);
    Manager.call(this, jobTitle, descriptionOfJob, employees.length);
    Department.call(this, departmentName, employees);
}
```

b) Create a toString() function for each of the Employee, Manager and Department class using the template literal.
In the toString() remember to call the super.toString() method to get the parent class properties.
The toString() function of the Department class should return a string with the following format:

```
 "Employee: Steve Taylor, Salary: 50000, Hire Date: 01/01/2015.
  Job Title: Manager, Description of Job: Manager of the Sales Department, Employees Managed: 2.
  Department Name: Sales, Employees: Steve,Marc"
``` 

c) Loop through the numbers array and the employee object and print out the values using the propper for loop method. (for-in, for-of)

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const employee = new Employee("Steve Taylor", 50000, "01/01/2015");
``` 


```JS
const calculator = function (num1, num2) {
    return num1 + num2;
}
```

da) Change the calculator function to an arrow function.

db) Change the function to a one line function by use the implicit return.

dc) Create a default value for one of the parameters.

dd) Use the rest operator to change the function to accept any number of parameters.

```JS
const manager = new Manager("Manager", "Manager of the Sales Department", ["Steve", "Marc"]);
```
e) Use destructuring to get the jobTitle and descriptionOfJob properties from the manager object.
