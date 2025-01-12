const express = require('express');
const doteenv = require('dotenv');
const cors = require('cors');
const DbConnection = require('./database/connection');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

doteenv.config();

const app = express();

//db connectivity
DbConnection();

//cors
app.use(cors());

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//app.use('https://plataforma.astenassinatura.com.br/api', require('./routes/astenRoutes'));
app.use('/api/envelopes', require('./routes/envelopesRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/inserirRepositorio', require('./routes/astenRoutes'));

//api Documentation
if (process.env.NODE_ENV != 'production'){
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}


app.get('/', (req,res,next) => {
    res.send('Hello');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server listening on port:' + PORT);
    
});

app.use(function (err,req,res,next) {
    console.error(err.stack)
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    })
});