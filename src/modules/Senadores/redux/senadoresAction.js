import axios from 'axios';

export const SENADORES_CARREGADO_SUCESSO = 'SENADORES_CARREGADO_SUCESSO';
export const senadoresCarregadoSucesso = senadores => ({
    type: SENADORES_CARREGADO_SUCESSO,
    payload: senadores
});

export const SENADORES_CARREGADO_ERRO = 'SENADORES_CARREGADO_ERRO';
export const senadoresCarregadosErro = erro => ({
    type: SENADORES_CARREGADO_ERRO,
    payload: erro
});

export const listarSenadores = (e) => {
    return dispatch => {
        axios
            .get('https://legis.senado.leg.br/dadosabertos/senador/lista/atual')
            .then(response => {
                dispatch(senadoresCarregadoSucesso(response.data));
            })
            .catch(error => {
                dispatch(senadoresCarregadosErro(error.data));
            });
    };
};

export const ATUALIZAR_COMISSOES = 'ATUALIZAR_COMISSOES';
export const atualizarComissoes = comissoes => ({
    type: ATUALIZAR_COMISSOES,
    payload: comissoes
});

export const setComissoes = (e) => {
    return dispatch => [
        axios
            .get(`https://legis.senado.leg.br/dadosabertos/senador/${e}/comissoes`)
            .then(response => {
                dispatch(atualizarComissoes(response.data.MembroComissaoParlamentar.Parlamentar.MembroComissoes.Comissao));
            })
            .catch(error => {
                dispatch(senadoresCarregadosErro(error));
            })
    ];
};

export const SET_SENADOR = 'SET_SENADOR';
export const setSenador = senador => ({
    type: SET_SENADOR,
    payload: senador
});

export const FILTRO_SENADORES = "FILTRO_SENADORES";
export const filtroSenadores = filtro => ({
    type: FILTRO_SENADORES,
    payload: filtro
});

export const LIMPAR_INFO_SENADOR = "LIMPAR_INFO_SENADOR";
export const limparInfoSenador = () => ({
    type: LIMPAR_INFO_SENADOR
});