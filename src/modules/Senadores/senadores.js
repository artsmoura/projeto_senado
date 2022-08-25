import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/table";
import Informacoes from "./informacoes/informacoes";
import { setComissoes, setSenador } from "./redux/senadoresAction";

const Senadores = () => {
    const dispatch = useDispatch();
    const listaSenadores = useSelector(state => state.senadoresState.senadores) ?? [];
    const filtro = useSelector(state => state.senadoresState.filtro);

    /* console.log(listaSenadores); */

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
        { cabecalho: "Nome", value: "NomeParlamentar" },
        { cabecalho: "Estado", value: "UfParlamentar" },
        { cabecalho: "Partido", value: "SiglaPartidoParlamentar" }
    ];

    /* const handleSenadores = (val) => {
        if (val === undefined) { return; }
        dispatch(setSenador(val.item));
        dispatch(setComissoes(val.item.CodigoParlamentar));
    }; */

    return (
        <>
            <Table
                dados={filtro.value === '' ? listaSenadores : senadoresFiltrados}
                coluna={coluna}
            /* subTable={{
                content: <Informacoes senador={senador} />,
                action: (val) => handleSenadores(val)
            }} */
            />
        </>
    );
};

export default Senadores;