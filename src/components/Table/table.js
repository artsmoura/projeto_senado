import React, { useState } from 'react';
import "./table.css";
import { ChevronRight } from '@material-ui/icons';


const Table = ({ dados, coluna, subTable }) => {

    const [itemSelected, setItemSelected] = useState();

    const handleSubTableOpen = (item, itemIndex) => {

        if (subTable && itemIndex !== itemSelected) {
            subTable.action({ itens: item });
        }
        if (itemIndex === itemSelected) {
            setItemSelected(null);
        } else {
            setItemSelected(itemIndex);
        }
    };

    const TableHeadItem = ({ item }) => <div className='tableColumn'>{item.cabecalho}</div>;

    const TableRow = ({ item, coluna, itemIndex, subtable }) => (
        <>
            <div className='tableRow' onClick={() => handleSubTableOpen(item, itemIndex)}>
                <ChevronRight />
                {coluna.map((itemColuna) => {
                    return (

                        <div className='tableColumn'>
                            {item[`${itemColuna.value}`]}
                            <span className='tableDivisor'></span>
                        </div>

                    );
                })}
            </div>
            <div className='subtable'>
                {subtable && itemIndex === itemSelected ?
                    <div className="subtable-body opened">
                        {subTable && subtable.content}
                    </div> :
                    <div className="subtable-body closed">
                        {subTable && subTable.content}
                    </div>
                }
            </div>
        </>
    );

    return (
        <div className='table'>
            <div className='tableHead'>
                <div className='tableRow'>
                    {coluna.map((item) => <TableHeadItem item={item} />)}
                </div>
            </div>
            <div className='tableBody'>
                <div className='tableContent'>
                    {dados.map((item, itemIndex) => <TableRow item={item} subtable={subTable} itemIndex={itemIndex} coluna={coluna} />)}
                </div>
            </div>
        </div>
    );

};


export default Table;