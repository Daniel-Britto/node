const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/books/insertbook', (req, res) => {

  const title = req.body.title
  const pageqty = req.body.pagesqty

  const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}', '${pageqty}')`

  conn.query(sql, function(err) {
    if(err) {
      console.log(err)
    }

    res.redirect('/')
  })
})

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kbrito2913',
  database: 'nodemysql',
})

conn.connect(function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Conectado ao MySQL!')

  app.listen(3000)
})
