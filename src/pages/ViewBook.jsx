import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import artoflogic from "../assets/images/artoflogic.jpg";
import { Link } from "react-router";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";
import { apiClient } from "../api/client";




export default function ViewBook() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');


    const [book, setBook] = useState({});

    const getBook = () => {
        apiClient.get(`/book/${id}`)
            .then((response) => {
                console.log(response.data);
                setBook(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(getBook, []);

    // --- Start of Date Formatting Logic ---
  const formattedDate = book.date
    ? new Date(book.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'Loading date...'; // Fallback for when date is not yet available
  // --- End of Date Formatting Logic ---

    return (
        <>
            <Navbar />
            <section className="mt-40">

                <h2 className=" text-3xl font-bold text-center">View Book</h2>
                {/* <div className="grid grid-cols-4 gap-4 m-10">
                        {books.map(book => {
                          return <BookCard key={book.id} book={book} />
                        })}
                      </div> */}

                <div className="grid grid-cols-2 m-20">

                    <div><img src={book.imageUrl} alt="artoflogic" className="w-60 flex flex-col justify-center" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">{book.title}</h1>
                        <h3 className="mb-10">{book.author}</h3>
                        <h4>{book.genre}</h4>
                        <h4>{formattedDate}</h4>
                        {/* <h4>{book.date}</h4> */}
                    </div>
                </div>

                <div className="flex flex-row justify-center gap-3">
                    <Link to={`/edit-book?id=${id}`} className="bg-amber-300 px-5 py-2 rounded-md cursor-pointer">Edit</Link>

                    <button className="bg-red-500 px-5 py-2 rounded-md cursor-pointer">Delete</button>
                </div>



                {/* <div className="">
                    <h3 className="font-bold text-2xl text-center mt-20">GENRE</h3>
                    <div className="flex flex-row justify-evenly p-20 text-red-800 text-2xl font-semibold"><p>Fiction</p><p>Non-Fiction</p><p>Religious</p><p>Politics</p><p>Climate</p></div>
                </div> */}

            </section>
            <Footer />
        </>
    )
}