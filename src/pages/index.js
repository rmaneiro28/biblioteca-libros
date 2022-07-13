import Book from "../components/book";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function Index() {
    const store = useAppContext();
    const booksContainer = {
        display: "flex",
        flexWrap: "Wrap",
        gap: "10px",
    };

    return (
      <Layout>
        <div style= {booksContainer} ></div>
        {store.items.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </Layout>
    );
}