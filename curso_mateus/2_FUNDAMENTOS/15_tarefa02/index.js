const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Qual seu nome?'
    },
    {
        name: 'idade',
        message: 'Qual sua idade?'
    },
])
.then((answer) => {
    if(answer.nome == '' || answer.idade ==  '') {
        throw new Error('O nome e a idade são obrigatótios!')
    }

    const response = `O nome do usuário é ${answer.nome} e ele tem ${answer.idade}`

    console.log(response)
})
.catch((err) => console.log(err))