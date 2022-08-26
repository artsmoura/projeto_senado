import {
    ATUALIZAR_COMISSOES,
    ATUALIZAR_IDIOMA,
    FECHAR_SENADORES,
    FILTRO_SENADORES,
    LIMPAR_FILTRO,
    LIMPAR_INFO_SENADOR,
    SENADORES_CARREGADO_ERRO,
    SENADORES_CARREGADO_SUCESSO,
    SET_SENADOR,
} from './senadoresAction';

const temaClaro = { key: "ligth-theme", nome: "Tema Claro" };
const temaEscuro = { key: "dark-theme", nome: "Tema Escuro" };
const portuguese = { key: "pt-BR", nome: "Português" };
const english = { key: "en-US", nome: "English" };
localStorage.setItem("idioma", JSON.stringify(portuguese));

const inicialState = {
    senadores: [],
    senador: {},
    partidos: {},
    filtro: {
        tipo: '',
        value: ''
    },
    error: {},
    tema: [temaClaro, temaEscuro],
    idiomaList: [portuguese, english],
    idioma: []
};

export default (state = inicialState, action) => {
    switch (action.type) {
        case SENADORES_CARREGADO_SUCESSO:
            const dados = action.payload.ListaParlamentarEmExercicio.Parlamentares.Parlamentar;
            return {
                ...state,
                senadores: dados.map((dado) => ({
                    ...dado,
                    isOpen: false,
                    comissoes: 0
                }))
            };
        case SENADORES_CARREGADO_ERRO:
            return {
                ...state,
                error: {
                    ...state.error,
                    message: action.payload
                }
            };
        case ATUALIZAR_COMISSOES:
            const dadosComissao = action.payload.MembroComissaoParlamentar.Parlamentar;
            return {
                ...state,
                senadores: state.senadores.map((senador) => {
                    const idSenador = senador.IdentificacaoParlamentar.CodigoParlamentar;
                    const idSenadorSelecionado = dadosComissao.Codigo;
                    return ({
                        ...senador,
                        comissoes: idSenador === idSenadorSelecionado ? dadosComissao.MembroComissoes.Comissao : senador.comissoes
                    });
                })
            };
        case SET_SENADOR:
            return {
                ...state,
                senadores: state.senadores.map((senador) => {
                    const idSenador = senador.IdentificacaoParlamentar.CodigoParlamentar;
                    const idSenadorSelecionado = action.payload.IdentificacaoParlamentar.CodigoParlamentar;
                    return ({
                        ...senador,
                        isOpen: idSenador === idSenadorSelecionado ? !senador.isOpen : senador.isOpen
                    });
                })
            };
        case FECHAR_SENADORES:
            return {
                ...state,
                senadores: state.senadores.map(senador => ({ ...senador, isOpen: false }))
            };
        case FILTRO_SENADORES:
            return {
                ...state,
                filtro: {
                    ...state.filtro,
                    tipo: action.payload.tipo,
                    value: action.payload.value
                }
            };
        case LIMPAR_FILTRO:
            return {
                ...state,
                filtro: inicialState.filtro
            };
        case ATUALIZAR_IDIOMA:
            return {
                ...state,
                idioma: action.payload
            };
        default:
            return state;
    }
};