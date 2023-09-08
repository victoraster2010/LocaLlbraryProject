const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GenreSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    minlenght: 3,
    maxlenght: 100
  }
})

GenreSchema.virtual('url').get(function () {
  return `/catalog/genre/${this.name}`;
});

module.exports = mongoose.model('Genre', GenreSchema)
