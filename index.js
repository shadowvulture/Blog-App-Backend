const express = require('express')
const app = express()
const articleController = require('./controllers/article')
const bodyParser = require('body-parser')



app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// app.use('/', (req, res) => {
//     res.redirect('/api/bookmarks/')
// })
app.use('/api/article/', articleController)

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});


app.listen(8081, () => console.log('They see me rollin...on port 8081...'))