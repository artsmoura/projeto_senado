import React, { useState } from 'react';
import "./table.css";

const Table = ({ dados, coluna }) => {
    return (
        <table>
            <thead>
                <tr>
                    {coluna.map((item) => <TableHeadItem item={item} />)}
                </tr>
            </thead>
            <tbody>
                {dados.map((item) => <TableRow item={item} coluna={coluna} />)}
            </tbody>
        </table >
    );
};

const TableHeadItem = ({ item }) => <th>{item.cabecalho}</th>;

const TableRow = ({ item, coluna }) => (
    <tr>
        {coluna.map((itemColuna) => {
            return <td>{item[`${itemColuna.value}`]}</td>;
        })}
    </tr>
);



export default Table;