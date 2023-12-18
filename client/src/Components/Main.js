import { currentBestsellers } from '../API';
import { useEffect, useState } from 'react';


function Main() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await currentBestsellers();
      const allBooksData = data.results.lists[0].books;
      const allBooks = allBooksData.map(item => ({
        title: item.title,
        author: item.author,
        image: item.book_image,
        description: item.description
      }))
      setAllBooks(allBooks);
    })();
  }, []);

  return (
    <div className="grid-container">
      {allBooks.map((book, index) => (
        <div key={index} className="grid-item">
          <img src={book.image} alt={book.title} />
          <p>{book.author}</p>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Main;
