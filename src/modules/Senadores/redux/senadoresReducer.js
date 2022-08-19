import React from 'react';
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
    const params = {
        pesquisa: `&nome=${e && e.pesquisa ? e.pesquisa : ''}`
    };

    return dispatch => {
        axios
            .get('')
            .then(response => {
                dispatch(senadoresCarregadoSucesso(response.data));
            })
            .catch(error => {
                dispatch(senadoresCarregadosErro(error));
            });
    };
};