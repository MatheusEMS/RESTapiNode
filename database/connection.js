const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true, // Utiliza o parser mais recente para URL de conexão
            useUnifiedTopology: true, // Usa o novo mecanismo de gerenciamento de conexões do MongoDB
        });
        console.log("connect");
    }catch (error){
        console.log("erro database connect", error);
        throw new Error(error);
    }
   
}