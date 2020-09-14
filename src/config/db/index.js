const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Education', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Ket noi database thanh cong!');
  } catch (error) {
    console.log('Ket noi database that bai!');
  }
}

module.exports = { connect };
