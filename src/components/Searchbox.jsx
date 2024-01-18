import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./searchBox.module.css"
function Searchbox({search , setSearch , searchHandler}) {
  return (
    <div className={styles.search}><input type="text" placeholder='search title' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase().trim())} />
    <button onClick={ searchHandler}><AiOutlineSearch /></button>
    </div>
  )
}

export default Searchbox

