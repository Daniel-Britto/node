const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a prenderNode.js...',
        comments: 4
    }
    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'JavaScript',
            body: 'Teste',
            comments: 4
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 5
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 2
        }
    ]

    res.render('blog', { posts })
})

app.get('/', (req, res) => {
    
    const user = {
        name: "Daniel",
        surname: "Brito",
        age: 30
    }

    const approved = false

    const auth = false

    res.render('home', { user: user, approved, auth })
})

app.listen(3000, () => {
    console.log('App rodando')
})