import React from 'react';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const Header = () => (
    <header>
        <nav>
            <Link to='/'>
                <FlatButton label="Главная"/>
            </Link>
            <Link to='/roster'>
                <FlatButton label="Вторая страница"/>
            </Link>
            <Link to='/schedule'>
                <FlatButton label="Десятая страница"/>
            </Link>
            <Link to='/schedule'>
                <FlatButton label="Десятая страница"/>
            </Link>
            <Link to='/schedule'>
                <FlatButton label="Десятая страница"/>
            </Link>
            <Link to='/schedule'>
                <FlatButton label="Десятая страница"/>
            </Link>
            <Link to='/schedule'>
                <FlatButton label="Десятая страница"/>
            </Link>
        </nav>
    </header>
);

export default Header;
