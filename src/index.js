import React from 'react'
import ReactDom from 'react-dom'

// CSS 
import './index.css'

const firstbook1 = {
  img_url: "https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL480_SR315,480_.jpg",
  author: 'Barrack Obama',
  title: 'A promised land'
}
const firstbook2 = {
  img_url:
    "https://images-na.ssl-images-amazon.com/images/I/81RDxgZUHJL._AC_UL480_SR312,480_.jpg",
  author: "Yhemmy Yhemmy",
  title: "Stick to the trajectory",
};

function BookList(){
  return (
    <section className="booklist">
      <Book img_url = {firstbook1.img_url} title ={firstbook1.title} author={firstbook1.author}>
        <p>
          using children props Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam delectus dignissimos voluptates suscipit accusamus possimus, quidem porro optio iure!
        </p>
      </Book>
      <Book img_url = {firstbook2.img_url} title ={firstbook2.title} author={firstbook2.author}/>
      <Book />
    </section>
  );
}

const Book = (props) => {
  const {img_url,title,author,children} = props //destructuring the props 
  return (
    <article>
      <img src={img_url} alt="" />
      <h1>{title}</h1>
      <h1>{author}</h1>
      {children} 
    </article>
  );
};


ReactDom.render(<BookList />,document.getElementById('root'));

