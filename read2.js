const mongoose = require('mongoose');
const Book = require('./library');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');

    // Tüm kitapları getir
    Book.find()
      .then((kitaplar) => {
        console.log('Veritabanındaki tüm kitaplar:');
        kitaplar.forEach((kitap) => {
          console.log(kitap);
        });
        mongoose.disconnect();
      })
      .catch((err) => {
        console.error('Kitapları getirme hatası:', err);
        mongoose.disconnect();
      });
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });