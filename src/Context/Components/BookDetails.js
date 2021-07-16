import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li key={book.id} onClick={() => removeBook(book.id)}>
      <h2>{book.name}</h2>
    </li>
  );
};

export default BookDetails;
