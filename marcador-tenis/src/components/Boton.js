//Autor: Gustavo Alejandro Gutiérrez Valdes
import '../styles/boton.css'

const Boton = (props) => {
    return (
        <button className="botonTenis" onClick={props.onClick}>
            {props.texto}
        </button>
    )
}

export default Boton;