const express = require("express")
const router = express.Router()

const Article = require('../db/models/Article')

router.get('/', (req, res) => {
    Article.find({})
      .then(place => {
        res.json(place)
      })
  })

  router.get('/:title', (req, res) => {
    let courseName = req.params.title
    Article.findOne({ name: courseName }).then(doc => {
        res.json(doc)
    })
})

  router.post('/', (req, res) => {
    Article.create(req.body)
      .then(place => {
        res.json(place)
      })
    })

 router.put('/:id', (req, res) => {
    Article.findOneAndUpdate({_id: req.params.id}, req.body)
   .then(updated => {
       res.json(updated)
   })
}) 

    router.delete('/:title', (req, res) => {
      Article.deleteOne({name: req.params.title})
        .then(deleted => {
          res.json(deleted)
        })
    })


module.exports = router