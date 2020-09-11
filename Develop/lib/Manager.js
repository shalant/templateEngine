// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor (id, officeNum) {
        super(id, officeNum),
        this.officeNum = officeNum
    }



//methods:
//getGitHub()
//getRole()
//overwritten to return "Manager"
}

module.exports = Manager;