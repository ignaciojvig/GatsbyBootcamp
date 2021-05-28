import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(
      slug: {
        eq: $slug
      }){
        title
        publishedDate(formatString: "MMM Do, YYYY")
        body{
          raw
        }
      }
    allContentfulAsset{
      edges{
        node{
          contentful_id
          description
          file{
            url
          }
        }
      }
    }
  }
`

const Blog = (props) => {

  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const image = props.data.allContentfulAsset.edges.find(assets => assets.node.contentful_id === node.data.target.sys.id)

        return <img alt={image.node.description} src={image.node.file.url} />
      }
    }
  }

  return (
    <Layout>
      <Head title={props.data.contentfulBlogPost.title} />
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw), options)}
    </Layout>
  )
}

export default Blog