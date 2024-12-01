const express = require('express');
const router = express.Router();
const astenController = require('../controller/astenController');
const JoiSchemaValidation = require('../middleware/joiSchemaValidation');
const envelopeSchema = require('../apiSchema/envelopeSchema');
const tokenValidation = require('../middleware/tokenValidation');

//colocar a validação de tokens no resto 

//repositorios

//envelopes

router.post('/', /*tokenValidation.validateToken,/*JoiSchemaValidation.validateBody(envelopeSchema.createEnvelopeSchema),*/ astenController.createRepo);

module.exports = router;