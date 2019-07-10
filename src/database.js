const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/amn-data', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));
