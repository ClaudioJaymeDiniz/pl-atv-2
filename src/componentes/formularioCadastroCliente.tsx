import { Component } from "react";


type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form className="formulario">
                    <div className="group-input">
                        <label htmlFor="">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Nome Social</label>
                        <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                    </div>
                    <div className="agrupamento">
                    <div className="group-input junto">
                        <label htmlFor="">CPF</label>
                        <input type="text" className="form-control" placeholder="CPF" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input junto">
                        <label htmlFor="">Data Emissão</label>
                        <input type="text" className="form-control" placeholder="DD/MM/AAAA" aria-label="Data Emissao" aria-describedby="basic-addon1" />
                    </div>
                    </div>
                    <div className="agrupamento">
                    <div className="group-input junto">
                        <label htmlFor="">RG</label>
                        <input type="text" className="form-control" placeholder="RG" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input junto">
                        <label htmlFor="">Data Emissão</label>
                        <input type="text" className="form-control" placeholder="DD/MM/AAAA" aria-label="Data Emissao" aria-describedby="basic-addon1" />
                    </div>
                    </div>
                    <div className="agrupamento">
                    <div className="group-input junto">
                    <label htmlFor="">Telefone</label>
                        <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input junto">
                    <label htmlFor="">Celular</label>
                        <input type="text" className="form-control" placeholder="Celular" aria-label="Celular" aria-describedby="basic-addon1" />
                    </div>
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
                
            </div>
        )
    }
}