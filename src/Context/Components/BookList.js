import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="BookList_app">
      <ul>
        {books.map((book) => {
          return <BookDetails book={book} id={book.id} />;
        })}
      </ul>
    </div>
  );
};

export default BookList;
