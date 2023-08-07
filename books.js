const mongoose = require('mongoose');
const Book = require('./library');
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

   //UserModel dosyanıza göre import edin

const yeniKitap = new Book({
    kitapAd: 'Origin',
    Yazar: 'Dan Brown',
    SayfaSayisi: 600,
    KitapTuru: 'Bilim-Kurgu',
 
});
yeniKitap.save()
  .then(() => {
    console.log('Yeni kullanıcı oluşturuldu:', yeniKitap);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.error('Kullanıcı oluşturma hatası:', err);
    mongoose.disconnect();
  });



const ikinciKitap = new Book({
    kitapAd: '1984',
    Yazar: 'George Orwell',
    SayfaSayisi: 350,
    KitapTuru: 'Gerilim',
});

ikinciKitap.save()
  .then(() => {
    console.log('Yeni kullanıcı oluşturuldu:', ikinciKitap);
    mongoose.disconnect();

  })
  .catch((err) => {
    console.error('Kullanıcı oluşturma hatası:', err);
    mongoose.disconnect();
  });



