import React from 'react'
import ReactDom from 'react-dom'

// CSS 
import './index.css'

function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = ()=>{
  return(
    <article>
      <Image/>
      <Title/>
      <Author/>
    </article>
)

}

const Image = ()=>{
  return (
  <img src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL480_SR315,480_.jpg" alt=""/>
  )
}
const Title = ()=>{
  return <h1>A promised land</h1>
}
const Author = ()=>{
  return <h1>Barrack Obama</h1>
}


ReactDom.render(<BookList />,document.getElementById('root'));

