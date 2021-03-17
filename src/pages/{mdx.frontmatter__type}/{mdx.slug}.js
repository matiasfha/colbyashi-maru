import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/Layout";

const PostOrProject = ({ data: { mdx } }) => {
  return (
    <Layout>
      <h1>{mdx.frontmatter.title}</h1>
      <h2>{mdx.frontmatter.type}</h2>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
};

export default PostOrProject;

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        type
        client
        description
        image
      }
      body
    }
  }
`;
