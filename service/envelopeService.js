const Envelope = require('../models/envelopeModel');
const { formatMongoData , checkObjectId } = require('../helper/dbHelper');
const constants = require('../constants');


module.exports.createEnvelope = async (serviceData) => {
    try {
        let envelope = new Envelope({ ...serviceData });
        let result =  await envelope.save();
        return formatMongoData(result);
    }catch (error){
        console.log('erro no criar envelope');
        throw new Error(error);
    }

    
}

module.exports.getAllEnvelopes = async ({skip = 0, limit = 10}) => {
    try {
        let envelopes = await Envelope.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return formatMongoData(envelopes);
    }catch (error){
        console.log('erro ao ler os envelopes');
        throw new Error(error);
    }

    
}

module.exports.getEnvelopeByID = async ({ id }) => {
    try {
        checkObjectId(id);
        let envelope = await Envelope.findById(id);
        if (!envelope){
            throw new Error(constants.envelopeMessage.ENVELOPE_NAO_ACHADO);
            
        }
        return formatMongoData(envelope);
    }catch (error){
        console.log('erro ao ler o envelope');
        throw new Error(error);
    }
}


module.exports.updateEnvelope = async ({ id , updateInfo}) => {
    try {
        checkObjectId(id);
        let envelope = await Envelope.findOneAndUpdate(
            {_id: id },
            updateInfo,
            {new: true}
        );
        if (!envelope){
            throw new Error(constants.envelopeMessage.ENVELOPE_NAO_ACHADO);
            
        }
        return formatMongoData(envelope);
    }catch (error){
        console.log('atualizou o envelope');
        throw new Error(error);
    }
}

module.exports.deleteEnvelope = async ({ id }) => {
    try {
        checkObjectId(id);
        let envelope = await Envelope.findByIdAndDelete(id);
        if (!envelope){
            throw new Error(constants.envelopeMessage.ENVELOPE_NAO_ACHADO);
            
        }
        return formatMongoData(envelope);
    }catch (error){
        console.log('deletou o envelope');
        throw new Error(error);
    }
}
