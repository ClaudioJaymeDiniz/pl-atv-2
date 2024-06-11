import { Component } from "react";

type props = {
    tema: string
}

export default class FormularioCadastroPet extends Component<props> {

    render() {
        let tema = this.props.tema
        return (
            <div className="container-fluid">
                <form>
                    <div className="group-input">
                        <label htmlFor="">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Tipo</label>
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Raça</label>
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <label htmlFor="">Genero</label>
                        <input type="text" className="form-control" placeholder="Genero" aria-label="Genero" aria-describedby="basic-addon1" />
                    </div>
                    <div className="group-input">
                        <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                    </div>
                </form>
            </div>
        )
    }
}