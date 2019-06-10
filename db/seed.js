const Article = require('../db/models/Article.js')
const blog = require('./blog.json')

Article.remove({}).then(() => {
    Article.create(blog)
    .then(piece => {
      console.log(blog)
    })
    .catch(err => {
      console.log(err)
    })
  
  })