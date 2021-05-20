import React from 'react'
import { Link } from 'gatsby'

export const Header = () => {
  return (
    <header>
      <h1> João Victor Ignacio </h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/blog"> Blog </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}