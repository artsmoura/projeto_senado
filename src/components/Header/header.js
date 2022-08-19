import React from "react";
import '../Header/header.css';
import SearchIcon from '@material-ui/icons/Search';
import Input from "../Input/input";

export default () => {
    return (
        <header className="headerBox">
            <Input
                id={'pesquisar'}
                name={'pesquisar'}
                placeholder={'Pesquisar'}
                value={''}
                changeInput={() => { }}
                leftButton={{
                    action: '',
                    text: 'Pesquisar',
                    icon: <SearchIcon />
                }}
            />
        </header>
    );
};