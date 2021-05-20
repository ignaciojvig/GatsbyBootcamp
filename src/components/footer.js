import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export const Footer = () => {
  const data = useStaticQuery(graphql`
  query{
    site{
      siteMetadata{
        author
      }
    }
  }
  `)

  return (
    <footer>
      <p> Created by {data.site.siteMetadata.author}, © 2021</p>
    </footer>
  )
}