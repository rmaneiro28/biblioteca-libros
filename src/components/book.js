import { Link } from "react-router-dom";

export default function Book({ item }) {
  const bookContainerStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    marginTop: "20px",
  };
  const bookInfoStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    color: "black",
    textDecoration: "none",
  };
  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <h1> {item.title} </h1>
        <img src={item.cover} width="200" alt=" {item.title} " />
      </Link>
    </div>
  );
}
