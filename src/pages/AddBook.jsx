import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { apiClient } from "../api/client";




export default function AddBook() {
  const postbook = (event) => {
    event.preventDefault();

    //Collect from input
    const data = new FormData(event.target);

    //Post data to api
    apiClient
      .post("/api/v1/books", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />
      <section className="pt-40 bg-amber-300 md:pt-40 lg:pt-40">
        <div className="min-h-screen bg-opacity-80 flex items-center justify-center px-4">
          <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
            <h1 className="text-3xl font-bold mb-6 text-center">📚Add New Book</h1>
            <form onSubmit={postbook} className="space-y-4">
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
                  name="published"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cover Image URL</label>
                <input
                  type="imageUrl"
                  name="cover"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="4"
                  placeholder="Brief description..."
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={star <= 0 ? "none" : "#facc15"}
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
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}





















































































// import { useState } from "react";
// import { Star } from "lucide-react";

// export default function AddBook() {
//   const [form, setForm] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     category: "",
//     published: "",
//     description: "",
//     isbn: "",
//     rating: 0, // Add rating to state
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // handler for star rating
//   const handleRating = (rating) => {
//     setForm((prev) => ({
//       ...prev,
//       rating,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Book added:\n" + JSON.stringify(form, null, 2));
//     setForm({
//       title: "",
//       author: "",
//       genre: "",
//       category: "",
//       published: "",
//       description: "",
//       isbn: "",
//       rating: 0,
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-xl">
//         <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Add New Book</h2>
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Title</label>
//             <input
//               type="text"
//               name="title"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Book Title"
//               value={form.title}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Author</label>
//             <input
//               type="text"
//               name="author"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Author Name"
//               value={form.author}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">ISBN</label>
//             <input
//               type="text"
//               name="isbn"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="e.g. 978-3-16-148410-0"
//               value={form.isbn || ""}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Genre</label>
//             <select
//               name="genre"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={form.genre}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select genre</option>
//               <option value="Fiction">Fiction</option>
//               <option value="Non-Fiction">Non-Fiction</option>
//               <option value="Science">Science</option>
//               <option value="Biography">Biography</option>
//               <option value="Fantasy">Fantasy</option>
//               <option value="History">History</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Category</label>
//             <select
//               name="category"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={form.category || ""}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select category</option>
//               <option value="Children">Children</option>
//               <option value="Teens">Teens</option>
//               <option value="Adults">Adults</option>
//             </select>
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Published Date</label>
//             <input
//               type="date"
//               name="published"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               value={form.published}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Description</label>
//             <textarea
//               name="description"
//               className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               rows="4"
//               placeholder="Brief description..."
//               value={form.description}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           {/* Rating stars */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Rating</label>
//             <div className="flex items-center space-x-1">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <button
//                   type="button"
//                   key={star}
//                   onClick={() => handleRating(star)}
//                   className="focus:outline-none"
//                   tabIndex={-1}
//                 >
//                   <Star
//                     size={24}
//                     fill={form.rating >= star ? "#facc15" : "none"}
//                     stroke="#facc15"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
//           >
//             Add Book
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// // This code defines a React component for adding a new book with various fields including title, author, genre, category, published date, description, ISBN, and a star rating system. The form uses controlled components to manage state and handle changes. When submitted, it alerts the user with the book details and resets the form.