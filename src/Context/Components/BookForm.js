import React, { useState, useContext } from "react";
import { BookContext } from "../Context/BookContext";

const BookForm = () => {
  const [name, setName] = useState("");
  const { addBook } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(name);
    setName("");
  };

  return (
    <div className="form_app">
      <form onSubmit={handleSubmit}>
        <label htmlFor="book">Add your book : </label>
        <input
          type="text"
          id="book"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="book"
          placeholder="Book Name..."
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
