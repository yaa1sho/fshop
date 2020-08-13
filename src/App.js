import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";

export default class App extends Component{
    render() {

        return (
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
        )
    }
}
