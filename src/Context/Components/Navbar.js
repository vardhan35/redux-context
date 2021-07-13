import React, { useContext } from "react";
import BookContext from "../Context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <nav className="navbar">
      <h2>You Have {books.length} These Many Books</h2>
    </nav>
  );
};

export default Navbar;
