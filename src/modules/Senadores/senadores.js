import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/table";

const Senadores = () => {
    const dispatch = useDispatch();
    const listaSenadores = useSelector(state => state.senadoresState.senadores) ?? [];
    const filtro = useSelector(state => state.senadoresState.filtro);

    const idioma = useSelector(state => state.senadoresState.idioma.key);
    const defaultText = require(`../../util/language/${idioma ? idioma : 'pt-BR'}.json`);

    function retornaFiltro(value) {
        let itemParaFiltro = value.IdentificacaoParlamentar;
        if (filtro.tipo === 'Estado') {
            if (itemParaFiltro.UfParlamentar === filtro.value) {
                return value;
            }
        } else if (filtro.tipo === 'Partido') {
            if (itemParaFiltro.SiglaPartidoParlamentar === filtro.value) {
                return value;
            }
        } else if (filtro.tipo === 'pesquisaGeral') {
            let pesquisaMinusculo = filtro.value.toLowerCase();
            let nomeMinsculo = itemParaFiltro.NomeParlamentar.toLowerCase();
            if (filtro.value !== '' && nomeMinsculo.includes(pesquisaMinusculo)) {
                return value;
            }
        } else {
            return;
        }
    }

    const senadoresFiltrados = [];
    var senadorPorTipo = listaSenadores.filter(retornaFiltro);
    senadorPorTipo.forEach(senadorEstado => {
        senadoresFiltrados.push(senadorEstado);
    });

    const coluna = [
        { cabecalho: defaultText.header.nome, value: "NomeParlamentar" },
        { cabecalho: defaultText.header.estado, value: "UfParlamentar" },
        { cabecalho: defaultText.header.partido, value: "SiglaPartidoParlamentar" }
    ];

    return (
        <>
            <Table
                dados={filtro.value === '' ? listaSenadores : senadoresFiltrados}
                coluna={coluna}
            />
        </>
    );
};

export default Senadores;