import React, { useState } from "react";
import './filtro.css';
import { ChevronRight } from '@material-ui/icons';
import RadioButton from "../RadioButton/radioButton";
import { filtroSenadores, limparInfoSenador } from "../../modules/Senadores/redux/senadoresAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Filtro = ({ item }) => {

    const dispatch = useDispatch();
    const filtro = useSelector(state => state.senadoresState.filtro);

    const [filtroOpen, setFiltroOpen] = useState({
        Partido: false,
        Estado: false
    });
    const handleOpenFiltro = (e) => {
        setFiltroOpen({
            ...filtroOpen,
            [e]: !filtroOpen[e]
        });
    };

    const setFiltro = (e) => {
        let itemFiltro = {
            tipo: e.target.name.replace('radio', ''),
            value: e.target.value
        };
        dispatch(filtroSenadores(itemFiltro));
        dispatch(limparInfoSenador());
    };

    const ConteudoFiltro = ({ item }) => (
        <>
            <div className="filtroHeader" onClick={() => handleOpenFiltro(item.text)}>
                <ChevronRight />
                <h3>{item.text}</h3>
            </div>
            <div className={`itensCheckbox ${filtroOpen[item.text]}`}>
                <RadioButton
                    name={`radio${item.text}`}
                    changeInput={e => setFiltro(e)}
                    selected={filtro.value}
                    options={item.valor}
                />
            </div>
        </>
    );

    return (
        <div className="filtroBox">
            <h2>Filtros</h2>
            {item.map((itemFiltro) => <ConteudoFiltro item={itemFiltro} />)}
        </div>
    );
};

export default Filtro;