const constants = require('../constants');
const userService = require('../service/userService');

module.exports.signup = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await userService.signup(req.body);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.userMessage.SIGNUP_SUCCESS;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: signup ', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}


module.exports.login = async (req,res) => {
    let response = {...constants.defaultServerResponse};
    try{
        const responseToService = await userService.login(req.body);
        console.log('body', responseToService);
        response.status = 200;
        response.message = constants.userMessage.LOGIN_SUCCESS;
        response.body = responseToService;
    }catch(error){
        console.log('Deu erro : env controller: login ', error);
        response.message = error.message;

    }
    return res.status(response.status).send(response);
}