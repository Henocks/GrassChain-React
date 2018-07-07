import React, {Component} from 'react';

import GrassChain from './grasschain/GrassChain';
import GrassCoin from './grasschain/GrassCoin';
import Navigator from './components/navigator/Navigator';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

import logo from './components/resources/logo.svg';

import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <GrassChain/>
                <GrassCoin/>
                <Navigator/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
