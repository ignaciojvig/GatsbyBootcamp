import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from './header.module.scss'

export const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1> <Link className={headerStyles.title} activeClassName={headerStyles.activeNavItem} to="/"> João Victor Ignacio </Link> </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/"> Home </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog"> Blog </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about"> About </Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact"> Contact </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}