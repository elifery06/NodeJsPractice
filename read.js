const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');

    // Tüm kullanıcıları getir
    User.find()
      .then((kullanicilar) => {
        console.log('Veritabanındaki tüm kullanıcılar:');
        kullanicilar.forEach((kullanici) => {
          console.log(kullanici);
        });
        mongoose.disconnect();
      })
      .catch((err) => {
        console.error('Kullanıcıları getirme hatası:', err);
        mongoose.disconnect();
      });
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });
