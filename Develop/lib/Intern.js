// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee {
    constructor (id, officeNum, whatevs){
        super(id, officeNum)
        this.whatevs = whatevs
    }
}