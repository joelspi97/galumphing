const { Router } = require('express');
const artPiecesController = require('../controllers/artPieces.controller');

const router = Router();

router.get('/:model', artPiecesController.getArtPieces);
router.post('/:model', artPiecesController.postArtPiece);

router.delete('/:model/:id', artPiecesController.deleteArtPiece);
router.get('/:model/:id', artPiecesController.getArtPieceDetails);
router.put('/:model/:id', artPiecesController.updateArtPieceDetails);

module.exports = router;
