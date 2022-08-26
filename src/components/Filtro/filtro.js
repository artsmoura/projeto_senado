import React, { useState } from "react";
import './filtro.css';
import { ChevronRight, Clear } from '@material-ui/icons';
import RadioButton from "../RadioButton/radioButton";
import { fecharSenadores, filtroSenadores, limparFiltro } from "../../modules/Senadores/redux/senadoresAction";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Button from "../Button/button";

const Filtro = ({ filtroHeader, item }) => {

    const dispatch = useDispatch();
    const filtro = useSelector(state => state.senadoresState.filtro);
    const idioma = useSelector(state => state.senadoresState.idioma.key);
    const defaultText = require(`../../util/language/${idioma ? idioma : 'pt-BR'}.json`);

    const [filtroOpen, setFiltroOpen] = useState({
        partido: false,
        estado: false
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
        dispatch(fecharSenadores());
    };

    const ConteudoFiltro = ({ item }) => (
        <>
            <div className={`filtroType ${filtroOpen[item.tipo]}`} onClick={() => handleOpenFiltro(item.tipo)}>
                <ChevronRight />
                <h3>{item.text}</h3>
            </div>
            <div className={`itensCheckbox ${filtroOpen[item.tipo]}`}>
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
        <div className={`filtroBox ${filtroHeader ? "filtroFromHeader" : ''}`}>
            <h2>{defaultText.filtro}</h2>
            {item.map((itemFiltro) => <ConteudoFiltro item={itemFiltro} />)}
            {
                JSON.stringify(filtroOpen).includes("true") ?
                    <Button
                        id="btnLimparFiltro"
                        titulo={"btnLimparFiltro"}
                        type="btnIconeTexto"
                        action={() => [
                            dispatch(limparFiltro()),
                            setFiltroOpen({
                                Partido: false,
                                Estado: false
                            }
                            )
                        ]}
                        texto={"Limpar"}
                        children={<Clear />}
                    /> : null
            }
        </div>
    );
};

export default Filtro;