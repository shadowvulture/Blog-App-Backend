const mongoose = require('../connection')


const ArticleSchema = new mongoose.Schema({
    author: String,
    authorImg: String,
    title: String,
    urlToImage: String,
    content: String,
    category: String,
    published: String
})

let article = mongoose.model('Article', ArticleSchema)

module.exports = article