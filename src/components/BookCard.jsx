import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";

import styles from "./BookCard.module.css"

function BookCard({data , handleLikedList}) {
    const {title , author , image , language , pages} = data;
    const [like , setLike] = useState(false);
    const likeHandler = () => {
        handleLikedList(data , like)
        setLike((like) => !like);
    }

  return (
    <div className={styles.card}>
    <img src={image} title={title} />
    <div >
        <h3>{title}</h3>
        <p>{author}</p>
        <div className={styles.info}>
            <span>{language}</span>
            <span>{pages} pages</span>
        </div>
    </div>
    <button onClick={likeHandler}><AiFillHeart color={like ? "red" : "white"} fontSize="1.8rem" /></button>
    
    
    
    
    </div>



  )
}

export default BookCard