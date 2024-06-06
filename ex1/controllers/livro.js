

const Livro = require('../models/livro');


module.exports.list = async () => {
    
    return Livro
        .find()
        .exec();
}


module.exports.findByid = async id => {
    return Livro
        .findOne({ _id: id })
        .exec();
}

module.exports.findByCharacter = async charater => {
    return Livro
        .find({ characters: charater })
        .exec();
}

module.exports.findByGenre = async genre => {
    return Livro
        .find({ genres: genre })
        .exec();
}
module.exports.genres = async () => {
    return Livro
        .distinct("genres")
        .sort()
        .exec();
}

module.exports.characters = async () => {
    return Livro
        .distinct("characters")
        .sort()
        .exec();
}

module.exports.insert = async livro => {
    var novo = new Livro(livro);
    return novo.save();
}


module.exports.remove = async id => {
    return Livro
        .deleteOne({ _id: id })
        .exec();
}

module.exports.update = async (id, livro) => {
    return Livro
        .findOneAndUpdate({ _id: id }, livro, { new: true })
        .exec();
}

module.exports.findBookByAuthors = async id => {
    return Livro
        .find({ author: id })
        .exec();
}