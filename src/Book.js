import React from 'react'

const Book = (props) => {
  const { img_url, title, author } = props.book; //destructuring the props

  const buttonOnClick = () => {
    alert("Hello world");
  };
  const moreComplexOnClick = (author) => {
    alert(author)
  };

  return (
    <article>
      <img src={img_url} alt="" />
      <h1>{title}</h1>
      <h1>{author}</h1>
      <button type="button" onClick={buttonOnClick}>
        refrence example
      </button>
      <button type="button" onClick={() => {moreComplexOnClick(author)}}>
        more complex example
      </button>
    </article>
  );
};;

export default Book
