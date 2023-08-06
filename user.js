const mongoose = require('mongoose');

// Kullanıcı şemasını oluşturmak için mongoose.Schema kullanın
const userSchema = new mongoose.Schema({
  ad: { type: String, required: true },
  soyad: { type: String, required: true },
  yas: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  olusturmaTarihi: { type: Date, default: Date.now },
  dogumAyi:{type:String , required:false},
});

// Kullanıcı şemasını kullanarak bir model oluşturun
const User = mongoose.model('User', userSchema);

// Modeli dışa aktarın
module.exports = User;
