import React from 'react'
import styles from '../styles/Layout.module.css';

export default function Layout(props) {
  return (
    <main className={styles.layout}>{props.children}</main>
  )
}
