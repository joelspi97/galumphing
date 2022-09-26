const { Schema, model } = require('mongoose');

const ArtPieceSchema = new Schema({
  dateOfCreation: { type: String, required: false },
  name: { type: String, required: false },
  mediums: { type: String, required: false }
});

const Painting = model('paintings', ArtPieceSchema);
const Linework = model('lineworks', ArtPieceSchema);

module.exports = {
  Painting,
  Linework
}
