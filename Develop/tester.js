const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')

inquirer.prompt([
    {
        name: 'roleType',
        type: 'list',
        choices: ['Engineer', 'Intern', 'Manager'],
        message: 'What role would you like to create?'
    },
    {
        name: 'name',
        type: 'input',
        message: 'Please enter your name'
    },
    {
        name: 'id',
        type: 'number',
        message: 'please enter an id to use',

    },
    {
        name: 'email',
        type: 'input',
        message: 'please enter your email'
    }
]).then(answers => {
    if(answers.A === 'Engineer'){
        const name = answers.name
        const id = answers.id
        const email = answers.email
        const github;
        inquirer.prompt(
            {
                name: 'github',
                type: 'input',
                message: 'Please enter your github account name: '

            }
        ).then(answer => {
            github = answer
        })

        const createdRole = new Engineer(name, id, email, github)

        console.log(createdRole

    } 

})