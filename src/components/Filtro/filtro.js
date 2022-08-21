import React from "react";
import Checkbox from "../Checkbox/checkbox";
import './filtro.css';

const Filtro = ({ item }) => {
    return (
        <div className="filtroBox">
            <p>Filtro</p>
            {item.map((itemFiltro) => {
                return (
                    <Checkbox
                        name="checkBox"
                        text={itemFiltro.value}
                        checked={''}
                        value={itemFiltro.value}
                        changeInput={(e) => ''}
                    />
                );
            })}
        </div>
    );
};

export default Filtro;