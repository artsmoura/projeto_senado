import { ChevronLeft } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

import './selectbox.css';

const SelectBox = ({ selected, handleSelect, options }) => {

    const listSelect = options.optiom;

    const [isActive, setIsActive] = useState(false);
    const [optionsFilter, setOptionsFilter] = useState([]);

    useEffect(() => {
        setOptionsFilter(listSelect);
    }, [listSelect]);

    return (
        <>
            <div className="selectBox">
                <div className={`selectBtn ${isActive}`} onClick={e => setIsActive(!isActive)}>
                    {selected}
                    <ChevronLeft />
                </div>
                {isActive && (
                    <div className="selectConteudo">
                        {optionsFilter.map((option) => (
                            <div className="selectItem" onClick={(e) => {
                                handleSelect(option);
                                setIsActive(false);
                            }}>
                                {option.nome}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default SelectBox;