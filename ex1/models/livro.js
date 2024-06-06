const mongoose = require('mongoose');

// Definir o esquema para o modelo Livro

const livroSchema = new mongoose.Schema({
    _id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    series: {
      type: String
    },
    author: {
      type: [String]  ,
      required: true
    },
    rating: {
      type: Number,
      //required: true
    },
    description: {
      type: String,
      //required: true
    },
    language: {
      type: String,
      //required: true
    },
    isbn: {
      type: String,
      //required: true,
      unique: true
    },
    genres: {
      type: [String],
      required: true
    },
    characters: {
      type: [String],
      required: true
    },
    bookFormat: {
      type: String
    },
    edition: {
      type: String
    },
    pages: {
      type: Number
    },
    publisher: {
      type: String
    },
    publishDate: {
      type: Date
    },
    firstPublishDate: {
      type: Date
    },
    awards: {
      type: [String]
    },
    numRatings: {
      type: Number,
      required: true
    },
    ratingsByStars: {
      type: [Number]
    },
    likedPercent: {
      type: String
    },
    setting: {
      type: [String]
    },
    coverImg: {
      type: String
    },
    bbeScore: {
      type: Number
    },
    bbeVotes: {
      type: Number
    },
    price: {
      type: String
    }
  });
  

// Criar e exportar o modelo Livro baseado no esquema definido
module.exports = mongoose.model('livros', livroSchema);
