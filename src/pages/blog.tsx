import Layout from "../components/Layout";
import blogs from "../blogs";

const BlogPage = () => (
  <Layout>
    {blogs.map(({ Blog, name }) => (
      <Blog key={name} />
    ))}
  </Layout>
);

export default BlogPage;
