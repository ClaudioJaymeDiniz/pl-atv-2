/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
};

type state = {
    activeButton: string
};

export default class BarraNavegacao extends Component<props, state> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            activeButton: ''
        };
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(valor: string, e: React.MouseEvent) {
        e.preventDefault();
        this.setState({ activeButton: valor });
        this.props.seletorView(valor, e);
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            return this.props.botoes.map(valor =>
                <li key={valor} className="nav-item">
                    <a className={`nav-link ${this.state.activeButton === valor ? 'active' : ''}`}
                    href="#" onClick={(e) => this.handleButtonClick(valor, e)}>
                        {valor}
                    </a>
                </li>
            );
        }
    }

    render() {
        let tema = this.props.tema;
        return (
            <>
                <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                    <div className="container-fluid">
                        <span className="navbar-brand mb-0 h1">PetLovers</span>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                {this.gerarListaBotoes()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}
