import React from "react";
import Navbar from "./Components/Navbar";
import BookProvider from "./Context/BookContext";

const ContextApp = () => {
  return (
    <div className="context_app">
      <BookProvider>
        <Navbar />
      </BookProvider>
    </div>
  );
};

export default ContextApp;
