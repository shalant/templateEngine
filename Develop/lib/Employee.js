// TODO: Write code to define and export the Employee class

//overall constructor function creation
class Employee {
    constructor(name){
       this.name = name,
       this.id = id,
       this.email = email,
    }

//methods:
    getName() {
        return this.name;
      }
    getID() {
        return this.id;
      }
    getEmail() {
        return this.email;
      }
    getRole() {
        return 'Employee';
      }



module.exports = Employee;