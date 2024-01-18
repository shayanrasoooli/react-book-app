import {books as bookData} from "../constants/mockData"

import React, { useState } from 'react'
import BookCard from "./BookCard"
import SideCard from "./SideCard"

import styles from "./books.module.css";
import Searchbox from "./Searchbox";

function Books() {
    const [books , setBooks] = useState(bookData);
    const [liked , setLiked] = useState([]);
    const [search , setSearch] = useState([]);

    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = liked.filter((i) => i.id !== book.id);
            setLiked(newLikedList);
        } else {
            setLiked((prevLiked) => [...prevLiked, book]);
        }
    };

    const searchHandler = () => {
        if(search){
            const newBooks = bookData.filter((book) => book.title.toLowerCase().includes(search))
            setBooks(newBooks);
        }else{
            setBooks(bookData);
        }

    }

  return (
    <>
    <Searchbox search={search} setSearch={setSearch} searchHandler={searchHandler}/>
    <div className={styles.container}>
        <div className={styles.card}>{books.map((book) => (
            <BookCard key={book.id} data={book} handleLikedList={handleLikedList}/>
        ))}</div>
        
            
            {!!liked.length && <><div className={styles.fave}> <h4>favorites</h4> <br/><div>{liked.map(book => <SideCard key={book.id} data={book}/>)}</div> </div> </>}
       
    </div>
    </>
  )
}

export default Books