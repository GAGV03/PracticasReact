//Autor: Gustavo Alejandro Gutiérrez Valdes
import '../styles/titulo.css'

const Titulo = (props) => {
    return (
        <div className="tituloTenis">
            {props.texto}
        </div>
    )
}

export default Titulo;