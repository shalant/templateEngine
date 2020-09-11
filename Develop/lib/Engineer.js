// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


//inherit thingy
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email),
        this.gitHub = gitHub
    }

//write getGitHub()function

//methods:
//getGitHub()
//getRole() //overwritten to return "Engineer"
}
module.exports = Engineer;