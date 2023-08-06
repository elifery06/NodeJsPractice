const mongoose = require('mongoose');
const User = require('./user');
mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');
  })
  .catch((err) => {
    console.error('MongoDB bağlantı hatası:', err);
  });

   // UserModel dosyanıza göre import edin

const yeniKullanici = new User({
  ad: 'John',
  soyad: 'Doe',
  yas: 30,
  email: 'john.doe1@example.com',
  dogumAyi:'ekim',
});

yeniKullanici.save()
  .then(() => {
    console.log('Yeni kullanıcı oluşturuldu:', yeniKullanici);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.error('Kullanıcı oluşturma hatası:', err);
    mongoose.disconnect();
  });


