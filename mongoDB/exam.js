const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat();
kitty.save((err) => {
  if (err) console.log('err', err)
  else console.log('save!!');
});
