import React,{ useState } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
//import ScotchInfoBar from './ScotchInfoBar';
import "./index.css";

function App() {
   const [books ,setBooks] = useState(null);
    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
const fetchData =async () =>{
  const response =await axios.get(apiURL);
  setBooks(response.data);
}
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>Fetch Data</button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {authors}</p>
                  <p>😀: {book.isbn}</p>
                  <p>📖: {book.numberOfPages} pages</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {book.released}</p>
                </div>
              </div>
              );
          })};
          </div>
           

      {/* Use JSX below for each book */}
    { /* <div className="books">
        <div className="book">
          <h3>Book Number</h3>
          <h2>Book Name</h2>

          <div className="details">
            <p>👨: Author/Authors</p>
            <p>📖: Number of pages</p>
            <p>🏘️: Book Country</p>
            <p>⏰: Release date</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
