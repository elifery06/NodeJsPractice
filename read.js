const mongoose = require('mongoose');
const User = require('./user');

read();
async function read() {



























  mongoose.connect('mongodb+srv://elifery06:hasnur_2009@cluster0.wzgyiqc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })




  var user = await User.findOne({
    _id: "64cb60278f940b932e879643"
  });

  console.log(user);

  user.ad = "Elif"

  console.log(user);

  await User.findOneAndUpdate({ "_id": user._id }, user)


  await User.deleteOne({ "_id": user._id })





























}