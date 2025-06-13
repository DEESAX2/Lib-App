import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiClient } from "../api/client";
import { useTranslation } from "react-i18next";
import SubmitButton from "../components/SubmitButton";
import { useNavigate } from "react-router";
import React, { useState } from "react";



export default function AddBook() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const { t } = useTranslation();

  const postBook = async (data) => {

    //Post data to api
    try {
      const response = await apiClient.post("/book", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(response);
      navigate('/booklist'); // Navigate back to the previous page
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="pt-40 bg-amber-300 md:pt-40 lg:pt-40">
        <div className="min-h-screen bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">📚Add New Book</h1>
            <form action={postBook} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Book Title"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input
                  type="text"
                  name="author"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Author Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input
                  name="genre"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="eg.Fiction"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Published Date</label>
                <input
                  type="date"
                  name="date"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      className="focus:outline-none"
                      tabIndex={-1}
                      onClick={() => setRating(star)}
                      aria-label={`Set rating to ${star}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={star <= rating ? "#facc15" : "none"}
                        viewBox="0 0 24 24"
                        stroke="#facc15"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.25 6.9a1.5 1.5 0 001.414.984h7.26c.969 0 1.371 1.24.588 1.81l-5.88 4.27a1.5 1.5 0 00-.543 1.682l2.25 6.9c.3.921-.755 1.688-1.54 1.161l-5.88-4.27a1.5 1.5 0 00-1.682 0l-5.88 4.27c-.785.527-1.84-.24-1.54-1.161l2.25-6.9a1.5 1.5 0 00-.543-1.682L2.927 12c-.783-.57-.381-1.81 .588-1.81h7.26a1.5 1.5 0 001.414-.984l2.25-6.9z"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <SubmitButton
                title="Add Book"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
