const envelopeService = require('../service/envelopeService');
const constants = require('../constants');

module.exports.createEnvelope = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await envelopeService.createEnvelope(req.body);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.envelopeMessage.ENVELOPE_CRIADO;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: create envelope', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}

module.exports.getAllEnvelopes = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await envelopeService.getAllEnvelopes(req.query);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.envelopeMessage.ENVELOPE_FETCHED;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: getAllEnvelopes', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}


module.exports.getEnvelopeByID = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await envelopeService.getEnvelopeByID(req.params);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.envelopeMessage.ENVELOPE_FETCHED;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: getEnvelopeByID', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}

module.exports.updateEnvelope = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await envelopeService.updateEnvelope({
            id: req.params.id,
            updateInfo: req.body
        });
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.envelopeMessage.ENVELOPE_ATUALIZADO;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: updateEnvelope', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}

module.exports.deleteEnvelope = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await envelopeService.deleteEnvelope(req.params);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.envelopeMessage.ENVELOPE_DELETADO;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: deleteEnvelope', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}


