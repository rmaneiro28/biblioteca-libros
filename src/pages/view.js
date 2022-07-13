import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const book = store.getItem(params.bookId);
    setItem(book);
  }, []);
  if (!item) {
    return <Layout>Item not found</Layout>;
  }

  const title = {
    fontSize: "32px",
    lineHeight: "10px",
    fontWeight: "800",
  };
  const author = {
    lineHeight: "0",
    fontSize: "20px",
  };
  const normal = {
    fontSize: "18px",
  };
  const booksContainer = {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
    gap: "20px",
    marginTop: "20px",
  };

  return (
    <Layout>
      <div style={booksContainer}>
        <div>
          {" "}
          {item?.cover ? <img src={item?.cover} width="400" alt="" /> : ""}
        </div>
        <div>
          <h2 style={title}> {item?.title} </h2>
          <h4 style={author}>{item?.author} </h4>
          <hr />
          <div style={normal}>{item?.intro} </div>
          <br />
          <div style={normal}>
            {" "}
            {item?.completed ? "Leído" : "Por terminar"}{" "}
          </div>
          <div style={normal}>Rating: {item?.review} </div>
        </div>
      </div>
    </Layout>
  );
}
