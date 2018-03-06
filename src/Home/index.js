import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import './styles.css';
import audiLogo from '../assets/images/cars/audi.jpg';
import bmwLogo from '../assets/images/cars/bmw.jpg';
import mercedesLogo from '../assets/images/cars/mercedes.jpg';
import porscheLogo from '../assets/images/cars/porsсhe.jpg';


class Home extends Component {
    constructor () {
        super();
        this.alertHandle = this.alertHandle.bind( this );
        this.randomPic = this.randomPic.bind(this);
        this.state = {
            logoPic: bmwLogo
        };
    }

    alertHandle () {
        alert( 'Wooohoo' );
    }

    randomPic() {
        const carsPic = {
            0:audiLogo,
            1:bmwLogo,
            2:mercedesLogo,
            3:porscheLogo
        };
        const min = 0;
        const max = 3;
        let rand = min + Math.random() * (max - min);
        rand = Math.round(rand);
        console.log(rand);
        this.setState({
            logoPic: carsPic[rand]
        });
    }

    render () {
        return (
            <div onClick={this.randomPic} className="App">
                <img style={{width:'100%'}} src={this.state.logoPic}/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div onClick={this.alertHandle}>hello click me
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> save to reload.
                </p>
            </div>
        );
    }
}

export default Home;