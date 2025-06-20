import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookCard from "../components/book-card";
import { apiClient } from "../api/client";

export default function BookList() {

  // useState is a hook that gives a component memory
  const [book, setBook] = useState([]);

  const getBooks = () => {
    apiClient.get('/book')
      .then((response) => {
        console.log(response.data);
        setBook(response.data);

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(getBooks, []);


  return (
    


    <section>
  <Navbar />
  <div>
    {/* Adjust margin for responsiveness: smaller margin on small screens, larger on medium and up */}
    <h1 className="text-2xl font-bold text-center mt-5 mb-10 md:m-40">VIEW OUR CATALOG</h1>
  </div>

  {/* Responsive Grid for Book Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-5 md:m-10">


    
    {book.map(book => {
      return <BookCard key={book.id} book={book} />
    })}
  </div>

  <Footer />
</section>
  );
}