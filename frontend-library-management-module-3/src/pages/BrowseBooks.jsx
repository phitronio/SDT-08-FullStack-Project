import React, { useEffect, useState } from 'react';
import BookCard from '../components/BookCard';
import { baseUrl } from '../services/BaseUrl';

const BrowseBooks = () => {

      const [books, setBooks] = useState([]);
    
        useEffect(() => {
            fetch(`${baseUrl}/books/all`)
                .then(res => res.json())
                .then(data => setBooks(data))
        }, [])

    return (
        <div>
           <div className='grid grid-cols-4 p-12 gap-12'>
                {
                    books.map(book=> <BookCard book={book}></BookCard>)
                }
           </div>
        </div>
    );
};

export default BrowseBooks;