import React from "react";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import BookProvider from "./Context/BookContext";

const ContextApp = () => {
  return (
    <div className="context_app">
      <BookProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookProvider>
    </div>
  );
};

export default ContextApp;
