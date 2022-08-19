import { SENADORES_CARREGADO_ERRO, SENADORES_CARREGADO_SUCESSO } from './senadoresReducer';

const seandoresInicial = {

};

const inicialState = {
    senadores: {}
};

export default (state = inicialState, { type, payload }) => {
    switch (type) {
        case SENADORES_CARREGADO_SUCESSO:
            return {
                ...state,
                senadores: payload
            };
        case SENADORES_CARREGADO_ERRO:
            return { ...state };
    }
};