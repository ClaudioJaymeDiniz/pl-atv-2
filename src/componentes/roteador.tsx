import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaClientes";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico"
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import FormularioCadastroPet from "./formularioCadastroPet";
import ListaPet from "./listaPet";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="#99ccff" 
        botoes={['Clientes', 'Cadastro Cliente', 'Cadastro Produto', 'Cadastro Serviço',
             'Lista Produtos', 'Lista Serviços','Cadastrar Pet','Lista Pets']} />;
        
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Cadastro Produto') { 
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Cadastro Serviço') { 
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Lista Produtos') { 
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="#e3f2fd" />
                </>
            );
        } else if (this.state.tela === 'Lista Serviços') { 
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            );
        }else if (this.state.tela === 'Lista Pets') { 
            return (
                <>
                    {barraNavegacao}
                    <ListaPet tema="#e3f2fd" />
                </>
            );
        }else if (this.state.tela === 'Cadastrar Pet') { 
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            );
        }
         else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            );
        }
    }
}
