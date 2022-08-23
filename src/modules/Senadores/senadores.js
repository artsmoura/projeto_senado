import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/table";
import Informacoes from "./informacoes/informacoes";
import { setComissoes, setSenador } from "./redux/senadoresAction";

const Senadores = () => {
    const dispatch = useDispatch();
    const listaSenadores = useSelector(state => state.senadoresState.senadores);
    const senador = useSelector(state => state.senadoresState.senador);
    const filtro = useSelector(state => state.senadoresState.filtro);

    const senadoresObject = [];
    Object.entries(listaSenadores).map((dados) => {
        const senadores = dados[1].IdentificacaoParlamentar;
        senadoresObject.push(senadores);
    });

    function retornaFiltro(value) {
        if (filtro.tipo === 'Estado') {
            if (value.UfParlamentar === filtro.value) {
                return value;
            }
        } else {
            if (value.SiglaPartidoParlamentar === filtro.value) {
                return value;
            }
        }
    }

    const senadoresFiltrados = [];
    var senadorPorTipo = senadoresObject.filter(retornaFiltro);
    senadorPorTipo.forEach(senadorEstado => {
        senadoresFiltrados.push(senadorEstado);
    });

    const coluna = [
        { cabecalho: "Nome", value: "NomeParlamentar" },
        { cabecalho: "Estado", value: "UfParlamentar" },
        { cabecalho: "Partido", value: "SiglaPartidoParlamentar" }
    ];

    const handleSenadores = (val) => {
        dispatch(setSenador(val.itens));
        dispatch(setComissoes(val.itens.CodigoParlamentar));
    };

    return (
        <>
            <Table
                dados={filtro === '' ? senadoresObject : senadoresFiltrados}
                coluna={coluna}
                subTable={{
                    content: <Informacoes info={senador} />,
                    action: (val) => handleSenadores(val)
                }}
            />
        </>
    );
};

export default Senadores;