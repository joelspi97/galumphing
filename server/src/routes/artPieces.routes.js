const { Router } = require('express');
const artPiecesController = require('../controllers/artPieces.controller');

const router = Router();

router.get('/', artPiecesController.getArtPieces);
router.post('/', artPiecesController.postArtPiece);

router.delete('/:id', artPiecesController.deleteArtPiece);
router.get('/:id', artPiecesController.getArtPieceDetails);
router.put('/:id', artPiecesController.updateArtPieceDetails);

module.exports = router;
