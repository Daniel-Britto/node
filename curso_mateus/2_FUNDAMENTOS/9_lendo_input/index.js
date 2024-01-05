const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual é sua inguagem preferida? ', (language) => {
    if(language == 'java') {
        console.log("Isso nem é linguagem!")
        readline.close()
    } else {
        console.log(`A minha linguagem preferida é: ${language}`)
        readline.close()
    }
})