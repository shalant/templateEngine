// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (id, officeNum, school) {
        super(id, officeNum)
        this.school = school
    }
//methods:
getSchool()
getRole()
}

module.exports = Intern;