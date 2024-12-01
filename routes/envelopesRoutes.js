const express = require('express');
const router = express.Router();
const envelopeController = require('../controller/envelopeController');
const JoiSchemaValidation = require('../middleware/joiSchemaValidation');
const envelopeSchema = require('../apiSchema/envelopeSchema');
const tokenValidation = require('../middleware/tokenValidation');

//colocar a validação de tokens no resto 

//repositorios

//envelopes

router.post('/', tokenValidation.validateToken,JoiSchemaValidation.validateBody(envelopeSchema.createEnvelopeSchema), envelopeController.createEnvelope);

router.put('/:id',tokenValidation.validateToken,JoiSchemaValidation.validateBody(envelopeSchema.updateEnvelopeById),envelopeController.updateEnvelope);

router.get('/:id', tokenValidation.validateToken,envelopeController.getEnvelopeByID);

router.get('/',tokenValidation.validateToken, JoiSchemaValidation.validateQueryParams(envelopeSchema.getAllEnvelopesSchema), envelopeController.getAllEnvelopes);

router.delete('/:id',tokenValidation.validateToken,envelopeController.deleteEnvelope);

module.exports = router;