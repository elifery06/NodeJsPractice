const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');

    // Kullanıcı silme işlemi
    User.findOneAndDelete(
      { ad: 'John' } // Silinecek kullanıcının koşulu
    )
      .then(deletedUser => {
        if (deletedUser) {
          console.log('Silinen kullanıcı:', deletedUser);
        } else {
          console.log('Silinecek kullanıcı bulunamadı.');
        }
        mongoose.disconnect();
      })
      .catch(err => {
        console.error('Kullanıcı silme hatası:', err);
        mongoose.disconnect();
      });
  })
  .catch(err => {
    console.error('MongoDB bağlantı hatası:', err);
  });
