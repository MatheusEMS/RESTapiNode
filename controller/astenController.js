const envelopeService = require('../service/astenService');
const constants = require('../constants');
const axios = require('axios');

module.exports.createRepo = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const apiUrl = 'https://plataforma.astenassinatura.com.br/api/inserirRepositorio';

        //const responseToService = await envelopeService.createEnvelope(req.body);
        console.log('body', req.body);
        const apiResponse = await axios.post(apiUrl, req.body);
        response.status = 200;
        response.message = constants.envelopeMessage.REPO;
        response.body = apiResponse;
    }catch(error){
        console.log('Deu erro : env controller: create repo', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}
