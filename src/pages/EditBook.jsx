import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { Star } from "lucide-react"; //Assuming you have lucide installed for icons



export default function EditBook() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center bg-amber-300  justify-center pt-40 md:pt-40 lg:pt-40">
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
                    <h2 className="text-3xl font-bold mb-6 text-center">Edit Book Details</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue="Existing Title"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Author</label>
                            <input
                                type="text"
                                name="author"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue="Author Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Genre</label>
                            <input
                                name="genre"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue=""
                                placeholder="eg.Fiction"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Published Date</label>
                            <input
                                type="date"
                                name="published"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                defaultValue="2022-08-15"
                            />
                        </div>
                        {/* <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                name="description"
                                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                rows="4"
                                defaultValue="Existing description..."
                            ></textarea>
                        </div> */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
                            <div className="flex items-center space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        type="button"
                                        key={star}
                                        className="focus:outline-none"
                                        tabIndex={-1}
                                    >
                                        <Star
                                            size={24}
                                            fill={0 >= star ? "#facc15" : "none"}
                                            stroke="#facc15"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                        >
                            Update Book
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    );
}















































































// import { useState } from "react";
// import { Star } from "lucide-react";

// export default function EditBook() {
//     const [form, setForm] = useState({
//         title: "Existing Title",
//         author: "Author Name",
//         genre: "Fiction",
//         category: "",
//         published: "2022-08-15",
//         description: "Existing description...",
//         isbn: "",
//         rating: 0,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // handler for star rating
//     const handleRating = (rating) => {
//         setForm((prev) => ({
//             ...prev,
//             rating,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // TODO: Add logic to update the book (e.g., API call)
//         alert("Book updated:\n" + JSON.stringify(form, null, 2));
//     };

//     return (
//         <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//             <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
//                 <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Edit Book Details</h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Title</label>
//                         <input
//                             type="text"
//                             name="title"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             value={form.title}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Author</label>
//                         <input
//                             type="text"
//                             name="author"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             value={form.author}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">ISBN</label>
//                         <input
//                             type="text"
//                             name="isbn"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             placeholder="e.g. 978-3-16-148410-0"
//                             value={form.isbn || ""}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Genre</label>
//                         <select
//                             name="genre"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             value={form.genre}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="">Select genre</option>
//                             <option value="Fiction">Fiction</option>
//                             <option value="Non-Fiction">Non-Fiction</option>
//                             <option value="Science">Science</option>
//                             <option value="Biography">Biography</option>
//                             <option value="Fantasy">Fantasy</option>
//                             <option value="History">History</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Category</label>
//                         <select
//                             name="category"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             value={form.category || ""}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="">Select category</option>
//                             <option value="Children">Children</option>
//                             <option value="Teens">Teens</option>
//                             <option value="Adults">Adults</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Published Date</label>
//                         <input
//                             type="date"
//                             name="published"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             value={form.published}
//                             onChange={handleChange}
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Description</label>
//                         <textarea
//                             name="description"
//                             className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                             rows="4"
//                             value={form.description}
//                             onChange={handleChange}
//                         ></textarea>
//                     </div>
//                     {/* Rating stars */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//                         <div className="flex items-center space-x-1">
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <button
//                                     type="button"
//                                     key={star}
//                                     onClick={() => handleRating(star)}
//                                     className="focus:outline-none"
//                                     tabIndex={-1}
//                                 >
//                                     <Star
//                                         size={24}
//                                         fill={form.rating >= star ? "#facc15" : "none"}
//                                         stroke="#facc15"
//                                     />
//                                 </button>
//                             ))}
//                         </div>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
//                     >
//                         Update Book
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
// // This code is a React component for editing book details. It includes fields for title, author, ISBN, genre, category, published date, description, and a star rating system. The form uses controlled components to manage state and handle changes. When submitted, it alerts the updated book details in JSON format.
