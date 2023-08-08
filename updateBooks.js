const mongoose = require('mongoose');
const Book = require('./library');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');

    // Kitap güncelleme işlemi
    Book.findOneAndUpdate(
      { kitapAd: 'Origin' }, // Güncellenecek kitabın koşulu
      { $set: { Yazar: 'x', SayfaSayisi: 700 } }, // Güncellenecek alanlar ve değerleri
      { new: true } // Güncellendikten sonra güncellenmiş dokümanın dönmesini sağlar
    )
      .then(updatedBook => {
        if (updatedBook) {
          console.log('Güncellenmiş kitap:', updatedBook);
        } else {
          console.log('Güncellenecek kitap bulunamadı.');
        }
        mongoose.disconnect();
      })
      .catch(err => {
        console.error('Kitap güncelleme hatası:', err);
        mongoose.disconnect();
      });
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  });
