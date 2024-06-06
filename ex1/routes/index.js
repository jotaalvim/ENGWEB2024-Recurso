var express = require('express');
var router = express.Router();

var Livro = require("../controllers/livro");


/* GET home page. */
router.get('/books', function(req, res, next) {
  const char = req.query.charater;
  const genre = req.query.genre;
  
  if (char != null) {
    Livro.findByCharacter(char)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else if (genre != null) {
    Livro.findByGenre(genre)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else {
    Livro.list()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
  }
  
});

router.get('/books/genres', function(req, res, next) {
  Livro.genres()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});

router.get('/books/characters', function(req, res, next) {
  Livro.characters()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
})


router.get('/books/:id', function(req, res, next) {
  Livro.findByid(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});


router.post('/books', function(req, res, next) {
  Livro.insert(req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
})

router.delete('/books/:id', function(req, res, next) {
  Livro.remove(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
})

router.put('/books/:id', function(req, res, next) {
  Livro.update(req.params.id, req.body)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
})


router.get('/authors/:id', function(req, res, next) {
  Livro.findBookByAuthors(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
});
module.exports = router;
