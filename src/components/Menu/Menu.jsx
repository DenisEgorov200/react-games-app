import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'

const setActive = ({isActive}) => isActive ? `${styles.activeLink}` : `${styles.link}`;

const Menu = ({ className }) => {
  return (
    <nav className={`${styles.menu} ${className}`}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/" className={setActive}>discover</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/explore" className={setActive}>explore</NavLink>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/collections" className={styles.link}>collections</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/deals" className={styles.link}>deals</NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/subscriptions" className={styles.link}>subscriptions</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu