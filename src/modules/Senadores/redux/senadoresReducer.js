import {
    ATUALIZAR_COMISSOES,
    FILTRO_SENADORES,
    LIMPAR_INFO_SENADOR,
    SENADORES_CARREGADO_ERRO,
    SENADORES_CARREGADO_SUCESSO,
    SET_SENADOR
} from './senadoresAction';

const inicialState = {
    senadores: {},
    senador: {},
    partidos: {},
    filtro: ''
};

export default (state = inicialState, { type, payload }) => {
    switch (type) {
        case SENADORES_CARREGADO_SUCESSO:
            return {
                ...state,
                senadores: payload.ListaParlamentarEmExercicio.Parlamentares.Parlamentar
            };
        case SENADORES_CARREGADO_ERRO:
            return { ...state };
        case ATUALIZAR_COMISSOES:
            return {
                ...state,
                senador: {
                    ...state.senador,
                    comissoes: payload
                }
            };
        case SET_SENADOR:
            return {
                ...state,
                senador: payload
            };
        case FILTRO_SENADORES:
            return {
                ...state,
                filtro: {
                    ...state.filtro,
                    tipo: payload.tipo,
                    value: payload.value
                }
            };
        case LIMPAR_INFO_SENADOR:
            return {
                ...state,
                senador: {}
            };
        default:
            return state;
    }
};