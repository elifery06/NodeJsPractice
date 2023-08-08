const mongoose = require('mongoose');
const Book = require('./library');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB\'ye başarıyla bağlandı');

    //kitap -yazar vs. silme işlemi
    Book.findOneAndDelete(
        {kitapAd:'Origin'}//sililnceek koşull
    )
    .then(deletedBook =>{
        if(deletedBook){
            console.log('silinen kitap:',deletedBook);
        } else{
            console.log('silinecek kitap bulunamadı.');
        }
        mongoose.disconnect();
    })
    .catch(err=>{
        console.error('kitap silme hatası:',err);
        mongoose.disconnect();
    });
  })
    .catch(err => {
        console.log('MongoDB bağlantı hatası:',err);
    });
