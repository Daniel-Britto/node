const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        maessage: 'Qual a primeira nota?',
    },
    {
        name: 'p4',
        message: 'Qual a segunda nota?',
    },
])
.then((answers) => {
    console.log(answers)
})
.catch((err) => console.log(err))