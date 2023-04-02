import Layout from "../components/Layout";
import books from "../books";

const BooksPage = () => (
  <Layout>
    {books.map(({ Book, name }) => (
      <Book key={name} />
    ))}
  </Layout>
);

export default BooksPage;
