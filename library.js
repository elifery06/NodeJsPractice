const mongoose = require('mongoose');

// Kullanıcı şemasını oluşturmak için mongoose.Schema kullanın

 const bookSchema = new mongoose.Schema({
  kitapAd: { type: String, required: true },
  Yazar: { type: String, required: true },
  SayfaSayisi: { type: Number, required: true },
  KitapTuru: { type: String, required: true },
  olusturmaTarihi: { type: Date, default: Date.now },
});

// Kullanıcı şemasını kullanarak bir model oluşturun
const Book = mongoose.model('Book', bookSchema);

// Modeli dışa aktarın
module.exports = Book;
