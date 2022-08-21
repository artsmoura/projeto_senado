import { ATUALIZAR_COMISSOES, ATUALIZAR_SENADORES, SENADORES_CARREGADO_ERRO, SENADORES_CARREGADO_SUCESSO } from './senadoresAction';

const inicialState = {
    senadores: {},
    senadoresAtualizados: {}
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
            };
        default:
            return state;
    }
};