const mongoose=require('mongoose');
const User=require('./user');

mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(()=>{
    console.log('MongoDB\'ye başarıyla bağlandı');

    //Kullanıcı güncelleme 
    User.findOneAndUpdate(
        {ad: 'John'},//güncellenecek kullanıcının koşuluuu
        {$set:{email:'dfdsf@yandex.com',yas:55}},//güncellenen yeni değerler
        {new:true}
    )

.then(updatedUser=> {
    if(updatedUser){
        console.log('Güncellenmiş kullanıcı:',updatedUser);
    } else{
        console.log('Güncellenecek kitap bulunamadı.');
    }
    mongoose.disconnect();
})
.catch(err=>{
    console.error('kullanıcı güncelleme hatası:',err);
    mongoose.disconnect();
});
})
.catch(err=>{
    console.error('MongoDB bağlantı hatası:',err);
});
