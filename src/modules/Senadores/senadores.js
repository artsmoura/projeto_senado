import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Table from "../../components/Table/table";
import { listarSenadores } from "./redux/senadoresAction";

const Senadores = () => {
    const dispatch = useDispatch();
    const listaSenadores = useSelector(state => state.senadoresState.senadores);

    const senadoresObject = [];
    Object.entries(listaSenadores).map((dados) => {
        const senadores = dados[1].IdentificacaoParlamentar;
        senadoresObject.push(senadores);
    });

    useEffect(() => {
        dispatch(listarSenadores());
    }, []);

    const coluna = [
        { cabecalho: "Nome", value: "NomeParlamentar" },
        { cabecalho: "Estado", value: "UfParlamentar" },
        { cabecalho: "Partido", value: "SiglaPartidoParlamentar" }
    ];



    return (
        <>
            <Table
                dados={senadoresObject}
                coluna={coluna}
            />
        </>
    );
};

export default Senadores;