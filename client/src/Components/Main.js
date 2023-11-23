import React from 'react';

const Main = ({ books }) => {
 return (
  <div className="grid-container">
    {books.map((book, index) => (
      <div key={index} className="grid-item">
        <img src={book.image} alt={book.title} />
        <p>{book.description}</p>
      </div>
    ))}
  </div>
 );
};

export default Main;
