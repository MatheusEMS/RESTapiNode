const Joi = require('@hapi/joi');

module.exports.createEnvelopeSchema = Joi.object().keys({
    descricao: Joi.string().required(),
    Repositorio: Joi.object({
        id: Joi.number().required() // numeros enviado como string são convertidos
    }).required(),
    mensagem: Joi.string().allow(null),
    mensagemObservadores: Joi.string().allow(null),
    mensagemNotificacaoSMS: Joi.string().allow(null),
    dataExpiracao: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).allow(null), // Formato yyyy-mm-dd
    horaExpiracao: Joi.string().regex(/^\d{2}:\d{2}:\d{2}$/).allow(null), // Formato hh:nn:ss
    usarOrdem: Joi.string().valid('S', 'N'),
    ConfigAuxiliar: Joi.object({
        documentosComXMLs: Joi.string().valid('S', 'N'),
        urlCarimboTempo: Joi.string().allow(null)
    }),
    listaDocumentos: Joi.object({
        Documento: Joi.array().items(
            Joi.object({
                nomeArquivo: Joi.string().required(),
                mimeType: Joi.string().required(),
                conteudo: Joi.string().required(),
                listaXMLAuxiliar: Joi.object({
                    XMLAuxiliar: Joi.array().items(
                        Joi.object({
                            nomeArquivo: Joi.string().allow(null),
                            conteudoXML: Joi.string().allow(null),
                            listaXMLSignatario: Joi.object({
                                XMLSignatario: Joi.array().items(
                                    Joi.object({
                                        emailSignatario: Joi.string().email().allow(null),
                                        idNodeAssinatura: Joi.string().allow(null),
                                        restringirTiposCertificados: Joi.string().allow(null),
                                        restringirPessoaFisica: Joi.string().allow(null),
                                        restringirPessoaJuridica: Joi.string().allow(null),
                                        cpfCnpjAceito: Joi.string().allow(null),
                                        carimboInterno: Joi.string().allow(null)
                                    })
                                )
                            })
                        })
                    )
                })
            })
        ).required()
    }).required(),
    listaSignatariosEnvelope: Joi.object({
        SignatarioEnvelope: Joi.array().items(Joi.object())
    }),
    listaObservadores: Joi.object({
        Observador: Joi.array().items(Joi.object())
    }),
    listaTags: Joi.object({
        Tag: Joi.array().items(Joi.string())
    }),
    listaInfoAdicional: Joi.object({
        InfoAdicional: Joi.array().items(Joi.object())
    }),
    incluirHashTodasPaginas: Joi.string().valid('S', 'N'),
    permitirDespachos: Joi.string().valid('S', 'N'),
    ignorarNotificacoes: Joi.string().valid('S', 'N'),
    ignorarNotificacoesPendentes: Joi.string().valid('S', 'N'),
    qrCodePosLeft: Joi.number().allow(null),
    qrCodePosTop: Joi.number().allow(null),
    dataIniContrato: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).allow(null),
    dataFimContrato: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).allow(null),
    objetoContrato: Joi.string().allow(null),
    numContrato: Joi.string().allow(null),
    valorContrato: Joi.number().allow(null),
    descricaoContratante: Joi.string().allow(null),
    descricaoContratado: Joi.string().allow(null),
    bloquearDesenhoPaginas: Joi.string().valid('S', 'N'),
    urlCallback: Joi.string().uri().allow(null)
});


module.exports.getAllEnvelopesSchema = Joi.object().keys({
    skip: Joi.string(),
    limit: Joi.string()
});

module.exports.updateEnvelopeById = Joi.object().keys({
    descricao: Joi.string(),
    Repositorio: Joi.object({
        id: Joi.number() // numeros enviado como string são convertidos
    }),
    mensagem: Joi.string().allow(null),
    mensagemObservadores: Joi.string().allow(null),
    mensagemNotificacaoSMS: Joi.string().allow(null),
    dataExpiracao: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/), // Formato yyyy-mm-dd
    horaExpiracao: Joi.string().regex(/^\d{2}:\d{2}:\d{2}$/), // Formato hh:nn:ss
    usarOrdem: Joi.string().valid('S', 'N'),
    ConfigAuxiliar: Joi.object({
        documentosComXMLs: Joi.string().valid('S', 'N'),
        urlCarimboTempo: Joi.string().allow(null)
    }),
    listaDocumentos: Joi.object({
        Documento: Joi.array().items(
            Joi.object({
                nomeArquivo: Joi.string(),
                mimeType: Joi.string(),
                conteudo: Joi.string(),
                listaXMLAuxiliar: Joi.object({
                    XMLAuxiliar: Joi.array().items(
                        Joi.object({
                            nomeArquivo: Joi.string().allow(null),
                            conteudoXML: Joi.string().allow(null),
                            listaXMLSignatario: Joi.object({
                                XMLSignatario: Joi.array().items(
                                    Joi.object({
                                        emailSignatario: Joi.string().email().allow(null),
                                        idNodeAssinatura: Joi.string().allow(null),
                                        restringirTiposCertificados: Joi.string().allow(null),
                                        restringirPessoaFisica: Joi.string().allow(null),
                                        restringirPessoaJuridica: Joi.string().allow(null),
                                        cpfCnpjAceito: Joi.string().allow(null),
                                        carimboInterno: Joi.string().allow(null)
                                    })
                                )
                            })
                        })
                    )
                })
            })
        )
    }),
    listaSignatariosEnvelope: Joi.object({
        SignatarioEnvelope: Joi.array().items(Joi.object())
    }),
    listaObservadores: Joi.object({
        Observador: Joi.array().items(Joi.object())
    }),
    listaTags: Joi.object({
        Tag: Joi.array().items(Joi.string())
    }),
    listaInfoAdicional: Joi.object({
        InfoAdicional: Joi.array().items(Joi.object())
    }),
    incluirHashTodasPaginas: Joi.string().valid('S', 'N'),
    permitirDespachos: Joi.string().valid('S', 'N'),
    ignorarNotificacoes: Joi.string().valid('S', 'N'),
    ignorarNotificacoesPendentes: Joi.string().valid('S', 'N'),
    qrCodePosLeft: Joi.number().allow(null),
    qrCodePosTop: Joi.number().allow(null),
    dataIniContrato: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).allow(null),
    dataFimContrato: Joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).allow(null),
    objetoContrato: Joi.string().allow(null),
    numContrato: Joi.string().allow(null),
    valorContrato: Joi.number().allow(null),
    descricaoContratante: Joi.string().allow(null),
    descricaoContratado: Joi.string().allow(null),
    bloquearDesenhoPaginas: Joi.string().valid('S', 'N'),
    urlCallback: Joi.string().uri().allow(null)
});