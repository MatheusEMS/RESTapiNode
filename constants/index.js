module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    envelopeMessage: {
        ENVELOPE_CRIADO: 'envelope criado com sucesso',
        REPO: 'repositorio criado com sucesso',
        ENVELOPE_FETCHED: 'envelope carregado com sucesso',
        ENVELOPE_ATUALIZADO: 'envelope atualizado',
        ENVELOPE_NAO_ACHADO: 'envelope não foi achado',
        ENVELOPE_DELETADO: 'envelope excluído'
    },
    userMessage: {  
        SIGNUP_SUCCESS: 'signup success',
        LOGIN_SUCCESS: 'login success',
        EMAIL_DUPLICADO: 'email já existe',
        USER_NOT_FOUND: 'usuário não foi encontrado',
        INCORRET_SENHA: 'senha incorreta'
    },
    requestValidationMessages: {
        BAD_REQUEST: 'Invalid fields',
        TOKEN_MISSING: 'token faltando'
    },
    databaseMessage: {
        INVALID_ID:'ID inválido'
    }
}