import React from 'react'
import styles from "./Layouts.module.css"

function Layouts({children}) {
  return (
    <>
    <header className={styles.header}>
        <h1>book app</h1>
        <p> <a href="">Shayan</a> reactJS full course</p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>developed by shayan with ❤️</p>
    </footer>










    </>
  )
}


export default Layouts