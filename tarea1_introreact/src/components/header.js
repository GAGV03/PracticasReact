import "../styles/header.css";

const Header = ({titulo,subtitulo}) => {
  return (
    <div className="header">
      <h1 className="tituloHeader">{titulo}</h1>
      <h2 className="subtituloHeader">
        {subtitulo}
      </h2>
    </div>
  );
};

export default Header;
