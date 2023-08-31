import { useState } from "react";
import "./App.css";
import { useLoaderData } from "react-router-dom";

function App() {
  const [books, setBooks] = useState(useLoaderData());

  const handleAddBook = (e) => {
    e.preventDefault();

    const form = e.target;
    const bookName = form.bookName.value;
    const author = form.author.value;

    const book = { bookName, author };

    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          window.alert("Books added to database successfully!");
          setBooks([...books, data]);
          form.reset();
        }
      });
  };

  console.log(books);

  return (
    <>
      <h1>Books Library</h1>

      <form onSubmit={handleAddBook}>
        <input
          type="text"
          name="bookName"
          id=""
          placeholder="Book Name"
          required
        />
        <br />
        <input
          type="text"
          name="author"
          id=""
          placeholder="Author Name"
          required
        />
        <br />
        <input type="submit" value="Add Book" />
      </form>

      <ol>
        {books &&
          books.map((book) => (
            <li key={book._id}>
              {book.bookName} : {book.author}
            </li>
          ))}
      </ol>
    </>
  );
}

export default App;
