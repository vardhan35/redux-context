import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookProvider = (props) => {
  const [books, setbooks] = useState([
    { id: 1, name: "BOOK 1" },
    { id: 2, name: "BOOK 2" },
    { id: 3, name: "BOOK 3" },
  ]);
  const addBook = (name) => {
    setbooks([...books, { name, id: 4 }]);
  };
  const removeBook = (id) => {
    setbooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookProvider;
