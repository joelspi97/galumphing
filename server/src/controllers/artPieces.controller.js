const artPieceModels = require('../models/ArtPiece.model');

const artPiecesController = {};

artPiecesController.getArtPieces = async (req, res) => {
  try {
    const artPieces = await artPieceModels[`${req.body.model}`].find();
    res.json({ artPieces, message: 'Art pieces retrieved successfully' });
  } catch (err) {
    console.error(`Could not get art pieces: ${err}`);
  }
};

artPiecesController.postArtPiece = async (req, res) => {
  try {
    const newArtPiece = new artPieceModels[`${req.body.model}`](req.body);
    await newArtPiece.save();
    res.json({ newArtPiece, message: 'Art piece uploaded successfully'});
  } catch (err) {
    console.error(`Could not post art piece: ${err}`);
  }
};

artPiecesController.deleteArtPiece = async (req, res) => {
  try {
    const deletedArtPiece = await artPieceModels[`${req.body.model}`].findByIdAndDelete(req.params.id);
    res.json({ deletedArtPiece, message: 'Art piece deleted successfully' });
  } catch (err) {
    console.error(`Could not delete art Piece: ${err}`);
  }
};

artPiecesController.getArtPieceDetails = async (req, res) => {
  try {
    const artPieceDetails = await artPieceModels[`${req.body.model}`].findById(req.params.id);
    res.json({ artPieceDetails, message: 'Art pieces details retrieved succesfully' });
  } catch (err) {
    console.error(`Could not get art Piece details: ${err}`);
  }
};

artPiecesController.updateArtPieceDetails = async (req, res) => {
  try {
    const updatedArtPiece = await artPieceModels[`${req.body.model}`].findByIdAndUpdate(req.params.id, req.body);
    res.json({ updatedArtPiece, message: 'Art Piece details updated successfully' });
  } catch (err) {
    console.error(`Could not update art Piece details: ${err}`);
  }
};

module.exports = artPiecesController;
