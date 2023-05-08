import styled from "@emotion/styled";
import Layout from "../components/Layout";
import news from "../news";

const NewsLayout = styled(Layout)`
  p {
    text-align: justify;
  }
`;

const BlogPage = () => (
  <NewsLayout>
    {news.map(({ News, name }) => (
      <News key={name} />
    ))}
  </NewsLayout>
);

export const Head = () => (
  <>
    <title>News | Sam Gray Books</title>
    <meta
      name="description"
      content="Read the latest news from the official Sam Gray site"
    />
    <meta property="og:title" content="News | Sam Gray Books" />
    <meta
      property="og:description"
      content="Read the latest news from the official Sam Gray site."
    />
    {/* <meta
      property="og:image"
      content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png"
    /> */}
    <meta name="twitter:card" content="summary_large_image" />
    {/* <meta name="twitter:site" content="@samgraybooks" /> */}
    <meta name="twitter:title" content="News | Sam Gray Books" />
    <meta
      name="twitter:description"
      content="Read the latest news from the official Sam Gray site."
    />
    {/* <meta
      name="twitter:image"
      content="https://html.sammy-codes.com/images/large-profile.jpg"
    /> */}
  </>
);

export default BlogPage;
