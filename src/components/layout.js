import React from 'react'
import { Header } from './header'
import { Footer } from './footer'
import "../styles/index.scss"

export const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}