import React from 'react'
import ReactDom from 'react-dom'

// CSS 
import './index.css'

const books = [
  {
    id: 1,
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL480_SR315,480_.jpg",
    author: "Barrack Obama",
    title: "A promised land",
  },
  {
    id: 2,
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/81RDxgZUHJL._AC_UL480_SR312,480_.jpg",
    author: "Yhemmy Yhemmy",
    title: "Stick to the trajectory",
  },
  {
    id: 3,
    img_url:
      "https://images-na.ssl-images-amazon.com/images/I/81RDxgZUHJL._AC_UL480_SR312,480_.jpg",
    author: "Yhemmy Yhemmy",
    title: "Stick to the trajectory",
  },
];



function BookList(){
  return (
  <section className="booklist">
    {books.map((book)=>{
      const{img_url, author, title} = book;
      return(
        <Book key={id} book ={book}/>
      )
    })}
  </section>
  )
}

const Book = (props) => {
  const {img_url,title,author} = props.book //destructuring the props
  return (
    <article>
      <img src={img_url} alt="" />
      <h1>{title}</h1>
      <h1>{author}</h1>
    </article>
  );
};


ReactDom.render(<BookList />,document.getElementById('root'));

