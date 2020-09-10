// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Engineer");


//inherit thingy
class Engineer extends Employee {
    constructor (id, officeNum, whatevs){
        super(id, officeNum)
        this.whatevs = whatevs
    }
}


//from readme:
this.gitHub = gitHub

//methods:
getGitHub()
getRole() //overwritten to return "Engineer"