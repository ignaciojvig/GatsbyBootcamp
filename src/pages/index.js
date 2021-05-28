import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1> Hello </h1>
      <h2> I'm João, a Fullstack Developer from Brazil </h2>
      <p> Need a Developer? <Link to="/contact"> Contact me. </Link> </p>
    </Layout>
  )
}

export default IndexPage
