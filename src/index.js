import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import {books} from './books'  //name import from name export
import Book from './Book' //Import from a deault export 

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const {id, img_url, author, title } = book;
        return <Book key={id} book={book} />;
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
