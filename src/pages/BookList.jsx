import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import arguing from "../assets/images/arguing.jpg"
import artoflogic from "../assets/images/artoflogic.jpg"
import idiotbrain from "../assets/images/idiotbrain.jpg";
import influencebias from "../assets/images/influencebias.jpg";
import standout from "../assets/images/standout.jpg";
import BookCard from "../components/book-card";
import { apiClient } from "../api/client";

export default function BookList() {

  const [books, setBooks] = useState([]);

  const getBooks = () => {
    apiClient.get('/book')
      .then((response) => {
        console.log(response.data);
        setBooks(response.data);

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getBooks, []);


  return (
    <section>
      <Navbar />
      <div><h1 className="text-2xl font-semibold text-center m-40">View all Books</h1></div>


      <div className="grid grid-cols-4 gap-4 m-10">
        {books.map(book => {
          return <BookCard key={book.id} book={book} />
        })}
      </div>

      <Footer />
    </section>
  );
}