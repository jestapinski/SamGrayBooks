import Layout from "../components/Layout";
import { H2 } from "../components/Text";
import books from "../books";

const BooksPage = () => (
  <Layout>
    <H2>Books</H2>
    {books.map(({ Book, name }) => (
      <Book key={name} />
    ))}
  </Layout>
);

export default BooksPage;
