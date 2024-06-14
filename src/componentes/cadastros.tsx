import { Component } from "react";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroCliente from "./formularioCadastroCliente";

type props = {
    tema: string
}

export default class Cadastros extends Component<props> {

    render() {
        return (
            <div className="container-fluid">
                <div className="container-cadastros">
                <div className="container-produtos">
                    <h2>Clientes</h2>
                    <FormularioCadastroCliente tema='#e3f2fd' />
                </div>
                <div className="container-produtos">
                    <h2>Pets</h2>
                    <FormularioCadastroPet tema='#e3f2fd' />
                </div>
                <div className="container-produtos">
                    <h2>Produtos</h2>
                    <FormularioCadastroProduto tema='#e3f2fd' />
                </div>
                <div className="container-produtos">
                    <h2>Serviços</h2>
                    <FormularioCadastroServico tema='#e3f2fd' />
                </div>
            </div>
            </div>
        )
    }
}