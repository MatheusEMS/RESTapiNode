const mongoose  = require('mongoose');

const xmlSignatarioSchema = new mongoose.Schema({
    emailSignatario: { type: String, default: null },
    idNodeAssinatura: { type: String, default: null },
    restringirTiposCertificados: { type: String, default: null },
    restringirPessoaFisica: { type: String, default: null },
    restringirPessoaJuridica: { type: String, default: null },
    cpfCnpjAceito: { type: String, default: null },
    carimboInterno: { type: String, default: null },
  });
  
  const xmlAuxiliarSchema = new mongoose.Schema({
    nomeArquivo: { type: String, default: null },
    conteudoXML: { type: String, default: null },
    listaXMLSignatario: {
      XMLSignatario: [xmlSignatarioSchema],
    },
  });
  
  const documentoSchema = new mongoose.Schema({
    nomeArquivo: { type: String, required: true },
    mimeType: { type: String, required: true },
    conteudo: { type: String, required: true },
    listaXMLAuxiliar: {
      XMLAuxiliar: [xmlAuxiliarSchema],
    },
  });
  
  const configAuxiliarSchema = new mongoose.Schema({
    documentosComXMLs: { type: String, default: "N" },
    urlCarimboTempo: { type: String, default: null },
  });

  const envelopeSchema = new mongoose.Schema({
    descricao: { type: String, required: true },
    Repositorio: {
      id: { type: Number, required: true },
    },
    mensagem: { type: String, default: null },
    mensagemObservadores: { type: String, default: null },
    mensagemNotificacaoSMS: { type: String, default: null },
    dataExpiracao: { type: Date, default: null },
    horaExpiracao: { type: String, default: null },
    usarOrdem: { type: String, default: "S" },
    ConfigAuxiliar: configAuxiliarSchema,
    listaDocumentos: {
      Documento: [documentoSchema],
    },
    listaSignatariosEnvelope: {
      SignatarioEnvelope: { type: Array, default: [] },
    },
    listaObservadores: {
      Observador: { type: Array, default: [] },
    },
    listaTags: {
      Tag: { type: Array, default: [] },
    },
    listaInfoAdicional: {
      InfoAdicional: { type: Array, default: [] },
    },
    incluirHashTodasPaginas: { type: String, default: "S" },
    permitirDespachos: { type: String, default: "S" },
    ignorarNotificacoes: { type: String, default: "N" },
    ignorarNotificacoesPendentes: { type: String, default: "N" },
    qrCodePosLeft: { type: Number, default: null },
    qrCodePosTop: { type: Number, default: null },
    dataIniContrato: { type: Date, default: null },
    dataFimContrato: { type: Date, default: null },
    objetoContrato: { type: String, default: null },
    numContrato: { type: String, default: null },
    valorContrato: { type: Number, default: null },
    descricaoContratante: { type: String, default: null },
    descricaoContratado: { type: String, default: null },
    bloquearDesenhoPaginas: { type: String, default: "S" },
    urlCallback: { type: String, default: null },
  },{
    timestamps: true,
    toObject: {
      transform: function(doc,ret,options){
        ret.id = ret._id;
        delete ret_id;
        delete ret.__v;
        return ret;
      }
    }
  });



module.exports = mongoose.model('Envelopes', envelopeSchema);