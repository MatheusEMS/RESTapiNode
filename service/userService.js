const User = require('../models/userModel');
const constants = require('../constants');
const { formatMongoData } = require('../helper/dbHelper');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { use } = require('../routes/envelopesRoutes');

module.exports.signup = async ({ email, senha}) => {
    try {
        const user = await User.findOne({ email});
        if (user) {
            throw new Error(constants.userMessage.EMAIL_DUPLICADO);
        }

        senha = await bcrypt.hash(senha, 12)

        const newUser = new User({ email, senha});

        let result = await newUser.save();

        return formatMongoData(result);
    }catch (error){
        console.log('erro no criar envelope');
        throw new Error(error);
    }
}


module.exports.login = async ({ email, senha}) => {
    try {
        const user = await User.findOne({ email});
        if (!user) {
            throw new Error(constants.userMessage.USER_NOT_FOUND);
        }
        const isValid = await bcrypt.compare(senha, user.senha);
        if (!isValid) {
            throw new Error(constants.userMessage.INCORRET_SENHA);    
        }

        const token = jwt.sign({ id: user._id}, process.env.SECRET_KEY || 'VASCO', 
        {expiresIn: '1d'});

        //passar token da asten tb
        return { token, email: user.email , id: 34872};
       
    }catch (error){
        console.log('erro no login');
        throw new Error(error);
    }
}