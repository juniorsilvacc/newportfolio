import React, { Component } from "react";
import "./Header.css";

class Header extends Component{
    render(){
        return(
            <div className="main">
                <div className="headerContainer">
                    <div className="headerDescription">
                            <h2>Olá! Eu sou</h2>
                            <h1>Júnior Silva</h1>
                            <h3>Estudante e Desenvolvedor</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;