import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {/* <li>{props.useName}</li> */}
          <li>Sign In</li>
          <li>
            <Link href="/NewTask">
              <a>New Task</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Task List</a>
            </Link>
          </li>
          <li>Sign Out</li>
        </ul>
      </nav>
    </header>
  )
}
