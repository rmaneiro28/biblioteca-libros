import { Link } from "react-router-dom";

export default function NavBar() {
    const linkStyle = {
      padding: "10px",
      display: "block",
      fontSize: "18px",
      color: "white",
      textDecoration: "none",
    };
    const navContainerStyle = {
      backgroundColor: "#181d27",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textDecoration: "none",
      color: "#fff",
      height: "140px",
      alignItems: "center",
    };
    const navStyle = {
      backgroundColor: "#181d27",
      display: "flex",
      justifyContent: "center",
      gap: "5px",
      textDecoration: "none",
      color: "#fff",
    };
    return (
      <div style={navContainerStyle}>
        <h1>Biblioteca de Libros</h1>
        <div style={navStyle}>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
          <Link to="/create" style={linkStyle}>
            Crear libro
          </Link>
        </div>
      </div>
    );
}