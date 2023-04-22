import Layout from "../components/Layout";
import { H2 } from "../components/Text";

const MerchPage = () => (
  <Layout>
    <H2>Merch</H2>
  </Layout>
);

export const Head = () => (
  <>
    <title>Merch | Sam Gray Books</title>
    <meta
      name="description"
      content="Buy official merch from the Sam Gray merch store!"
    />
    <meta property="og:title" content="Merch | Sam Gray Books" />
    <meta
      property="og:description"
      content="Buy official merch from the Sam Gray merch store!"
    />
    {/* <meta
      property="og:image"
      content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
    /> */}
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta name="twitter:site" content="@samgraybooks" /> */}
    <meta name="twitter:title" content="Merch | Sam Gray Books" />
    <meta
      name="twitter:description"
      content="Buy official merch from the Sam Gray merch store!"
    />
    {/* <meta
      name="twitter:image"
      content="https://html.sammy-codes.com/images/large-profile.jpg"
    /> */}
  </>
);

export default MerchPage;
