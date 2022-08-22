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

    const senadoresObject = [];
    Object.entries(listaSenadores).map((dados) => {
        const senadores = dados[1].IdentificacaoParlamentar;
        senadoresObject.push(senadores);
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
                dados={senadoresObject}
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