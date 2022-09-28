const { Router } = require('express');
const contactFormController = require('../controllers/contactForm.controller');

const router = Router();

router.post('/', contactFormController.sendMessage);

module.exports = router;
