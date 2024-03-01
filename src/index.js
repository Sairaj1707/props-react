import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const books = [
    {
        id: 1,
        title: "Think Straight: Change your thoughts, Change your life",
        author: "Darius Foroux",
        img: "https://m.media-amazon.com/images/I/71XpkRq0ncL._AC_UY218_.jpg",
        price: "Rs. 250",
    },

    {
        id: 2,
        title: "The Power of Your Subconscious Mind",
        author: "Joseph Murphy",
        img: "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY218_.jpg",
        price: "Rs. 450",
    },

    {
        id: 3,
        title: "Don't Believe Everything You Think",
        author: "Joseph Nguyen",
        img: "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY218_.jpg",
        price: "Rs. 300",
    },
    {
        id: 4,
        title: "The Science of Getting Started",
        author: "Patrick King ",
        img: "https://m.media-amazon.com/images/I/71n26QIGeVL._AC_UY218_.jpg",
        price: "Rs. 300",
    },
]


function BookList(){
    return(
        <>
        <h1>Bestseller Books</h1>
        <br></br>
        <section className="booklist">
            {books.map((book)=>{
               const { title, author, img,price, id} = book;
                return <Book key={id} book={book}/>
            })}

        </section>
        </>
    );
}

const Book = (props)  =>{

    const handleClick = (e)=>{
        console.log(e);
        console.log(e.target);
        alert("You Clicked the button");
    }

    function complxeg(author){
        alert(author);   
    }


    const {img, author, title, price} = props.book;
    return (
        <article className="book" onMouseOver={() => console.log(author)}>
        <img src={img} alt="" />
        <h1 onClick={()=> console.log(title)}>{title}</h1>
        <h2>{author}</h2>
        <h3>{price}</h3>
        <button className="btn" type="button" onClick={handleClick}>
            Click Me
        </button>

        <button className="btn" type="button" onClick={() => complxeg(author)}>
            Give me author name
        </button>

        
    </article>
    )
} 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);