import Layout from "../components/Layout";
import { H2 } from "../components/Text";

const AuthorPage = () => (
  <Layout>
    <H2>Author</H2>
    <p>
      Sam Gray currently resides in NYC and is excited to be creating new works
      related to body positivity and creating growth mindsets for children.
    </p>
  </Layout>
);

export const Head = () => (
  <>
    <title>About the Author | Sam Gray Books</title>
    <meta
      name="description"
      content="About Sam Gray - author of 'Ella the Elephant and Growing Up'"
    />
    <meta property="og:title" content="About the Author | Sam Gray Books" />
    <meta
      property="og:description"
      content="About Sam Gray - author of 'Ella the Elephant and Growing Up'"
    />
    {/* <meta
      property="og:image"
      content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
    /> */}
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta name="twitter:site" content="@samgraybooks" /> */}
    <meta name="twitter:title" content="About the Author | Sam Gray Books" />
    <meta
      name="twitter:description"
      content="About Sam Gray - author of 'Ella the Elephant and Growing Up'"
    />
    {/* <meta
      name="twitter:image"
      content="https://html.sammy-codes.com/images/large-profile.jpg"
    /> */}
  </>
);

export default AuthorPage;
