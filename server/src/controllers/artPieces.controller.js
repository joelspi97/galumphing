const artPieceModels = require('../models/ArtPiece.model');

const artPiecesController = {};

artPiecesController.getArtPieces = async (req, res) => {
  try {
    const artPieces = await artPieceModels[`${req.params.model}`].find();
    res.json({ message: 'Art pieces retrieved successfully', artPieces });
  } catch (err) {
    console.error(`Could not get art pieces: ${err}`);
  }
};

artPiecesController.postArtPiece = async (req, res) => {
  try {
    const newArtPiece = new artPieceModels[`${req.params.model}`](req.body);
    await newArtPiece.save();
    res.json({ message: 'Art piece uploaded successfully', newArtPiece });
  } catch (err) {
    console.error(`Could not post art piece: ${err}`);
  }
};

artPiecesController.deleteArtPiece = async (req, res) => {
  try {
    const deletedArtPiece = await artPieceModels[`${req.params.model}`].findByIdAndDelete(req.params.id);
    res.json({ message: 'Art piece deleted successfully', deletedArtPiece });
  } catch (err) {
    console.error(`Could not delete art Piece: ${err}`);
  }
};

artPiecesController.getArtPieceDetails = async (req, res) => {
  try {
    const artPieceDetails = await artPieceModels[`${req.params.model}`].findById(req.params.id);
    res.json({ message: 'Art pieces details retrieved succesfully', artPieceDetails });
  } catch (err) {
    console.error(`Could not get art Piece details: ${err}`);
  }
};

artPiecesController.updateArtPieceDetails = async (req, res) => {
  try {
    const updatedArtPiece = await artPieceModels[`${req.params.model}`].findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: 'Art Piece details updated successfully', updatedArtPiece });
  } catch (err) {
    console.error(`Could not update art Piece details: ${err}`);
  }
};

module.exports = artPiecesController;
