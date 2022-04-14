const router = require('express').Router()
const db = require('../models')


//GET ROUTES
//Home
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
      res.render('places/index', {places})
    })
  .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

//New
router.get('/new', (req, res) => {
  res.render('places/new')
})

//Places Pages
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
      res.render('places/show', {place})
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//Place's Edit Pages
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

//Places Comment Page
router.get('/:id/rant', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/rant', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

//OTHER ROUTING
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log(err)
      res.render('error404')
  })
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})


//UPDATE DATA
//Comments
router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  if (req.body.rant) {
    req.body.rant = true
  } else {
    req.body.rant = false
  }

  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
        .then(() => {
          res.redirect(`/places/${req.params.id}`)
        })
      })
      
      .catch(err => {
        res.render('error404')
      })
  })
  .catch(err => {
    res.render('error404')
  })
})

//Places
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


//DELETES
//Places
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

//Comments
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router