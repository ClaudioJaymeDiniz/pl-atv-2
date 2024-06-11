/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
type props = {
    tema: string
};

type state = {
    selectedItem: string | null,
    showModal: boolean
};

export default class ListaCliente extends Component<props, state> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.state = {
            selectedItem: null,
            showModal: false
        };
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleItemClick(item: string, e: React.MouseEvent) {
        e.preventDefault();
        this.setState({
            selectedItem: item,
            showModal: true
        });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    handleAlterar() {
        console.log(`Alterar cliente: ${this.state.selectedItem}`);
        this.handleCloseModal();
    }

    handleExcluir() {
        console.log(`Deletar cliente: ${this.state.selectedItem}`);
        this.handleCloseModal();
    }

    render() {
        const { tema } = this.props;
        const { selectedItem, showModal } = this.state;
        return (
            <main>
                <div className="list-group">
                    {["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5", "Cliente 6"].map(cliente => (
                        <a
                            href="#"
                            key={cliente}
                            className={`list-group-item list-group-item-action list-group-item-primary ${selectedItem === cliente ? tema : ""}`}
                            onClick={(e) => this.handleItemClick(cliente, e)}
                        >
                            {cliente}
                        </a>
                    ))}
                </div>
                {showModal && (
                    <div className="modal show" tabIndex={-1} style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Detalhes do Cliente</h5>
                                    <button type="button" className="btn-close" onClick={this.handleCloseModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>nome: {selectedItem}</p>
                                    <p>nome social: {selectedItem}</p>
                                    <p>cpf: {selectedItem}</p>
                                    <p>data emissão: {selectedItem}</p>
                                    <p>email: {selectedItem}@email.com</p>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn" onClick={this.handleAlterar}>Alterar</button>
                                    <button type="button" className="btn" onClick={this.handleExcluir}>Excluir</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        );
    }
}
