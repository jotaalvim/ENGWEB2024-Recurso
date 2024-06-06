var express = require('express');
var router = express.Router();
const axios = require('axios');


router.get('/authors/:idAutor', function(req, res, next) {
  axios.get('http://localhost:17000/authors/'+req.params.idAutor)
  .then(response => {
      var d = new Date().toISOString().substring(0, 16)
      total = Object.keys(response.data).length;
      name2 = req.params.idAutor;

      res.render('autor', { data:d, nome: name2 ,totalL: total, livros: response.data});
  })
  .catch(erro => {
      res.render('error', {error: erro})
    })
  }
);

router.get('/', function(req, res, next) {
  axios.get('http://localhost:17000/books')
  .then(response => {
      
      var d = new Date().toISOString().substring(0, 16)
      //console.log(response.data);
      res.render('index', { data:d,livros: response.data});
  })
  .catch(erro => {
      res.render('error', {error: erro})
    })


});



router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:17000/books/'+req.params.id)
  .then(response => {
      var d = new Date().toISOString().substring(0, 16)
      res.render('livro', { data:d, livro: response.data});
  })
  .catch(erro => {
      res.render('error', {error: erro})
    })
  });

module.exports = router;
