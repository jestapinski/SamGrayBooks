import Layout from "../components/Layout";
import books from "../books";

const BooksPage = () => (
  <Layout>
    {books.map(({ Book, name }) => (
      <Book key={name} />
    ))}
  </Layout>
);

export const Head = () => (
  <>
    <title>Books | Sam Gray Books</title>
    <meta
      name="description"
      content="Ella the Elephant and Growing Up - In this book, Ella and her friend Zara go to school and learn that everyone belongs!"
    />
    <meta property="og:title" content="Books | Sam Gray Books" />
    <meta
      property="og:description"
      content="Ella the Elephant and Growing Up"
    />
    {/* <meta
      property="og:image"
      content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
    /> */}
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta name="twitter:site" content="@samgraybooks" /> */}
    <meta name="twitter:title" content="Books | Sam Gray Books" />
    <meta
      name="twitter:description"
      content="Ella the Elephant and Growing Up"
    />
    {/* <meta
      name="twitter:image"
      content="https://html.sammy-codes.com/images/large-profile.jpg"
    /> */}
  </>
);

export default BooksPage;
