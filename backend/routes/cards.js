const router = require('express').Router();
const {
  getCards, createCard, deleteCard, likeCard, unlikeCard,
} = require('../controllers/cards');
const { cardValidation, idValidation } = require('../middlewares/validationCheck');

router.get('/', getCards);
router.post('/', cardValidation, createCard);
router.delete('/:id', idValidation, deleteCard);
router.put('/:id/likes', idValidation, likeCard);
router.delete('/:id/likes', idValidation, unlikeCard);

module.exports = router;
