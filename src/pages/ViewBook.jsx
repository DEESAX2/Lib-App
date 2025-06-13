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

                {/* Main Content Area: Image and Book Details */}
                {/* Default to a single column on small screens (grid-cols-1)
                    and switch to two columns on medium screens and up (md:grid-cols-2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5 md:p-10 lg:p-20 items-start"> {/* Adjusted padding and alignment */}

                    {/* Image Section */}
                    <div className="flex justify-center md:justify-end"> {/* Center image on small, align right on medium+ */}
                        <img
                            src={book.imageUrl || 'https://via.placeholder.com/240x320?text=No+Image'} // Fallback for image
                            alt={book.title || 'Book cover'}
                            className="w-60 h-auto object-contain shadow-lg rounded-md"
                        />
                    </div>

                    {/* View Book Details */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left"> {/* Center text on small, align left on medium+ */}
                        <h1 className="text-2xl font-semibold mb-2">{book.title}</h1>
                        <h3 className="text-xl text-gray-700 mb-4">{book.author}</h3>
                        <p className="text-lg text-gray-600 mb-2">Genre: {book.genre}</p>
                        <p className="text-lg text-gray-600 mb-4">Published: {formattedDate}</p>

                    </div>
                </div>


                <div className="flex flex-row justify-center gap-3">
                    <Link to={`/edit-book?id=${id}`} className="bg-amber-300 px-5 py-2 rounded-md cursor-pointer">Edit</Link>

                    <button className="bg-red-500 px-5 py-2 rounded-md cursor-pointer">Delete</button>
                </div>

            </section>
            <Footer />
        </>
    )
}