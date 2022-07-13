import NavBar from "./navbar";

export default function Layout({ children }) {
  const containerStyle = {
    width: "90%",
    margin: "20px auto",
  };
  const booksContainer = {
    display:"flex",
    alignItems: "center",
    justifyContent: "spaceBetween",
    flexWrap: "Wrap",
  };
  return (
    <div style={containerStyle}>
      <NavBar />
      <div style={booksContainer}>{children}</div>
    </div>
  );
}
