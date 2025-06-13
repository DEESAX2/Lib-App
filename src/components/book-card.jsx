import { Link } from "react-router"

export default function BookCard({ book }) {
console.log('bookd',book)

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
        
        <div className="bg-alexis p-6 rounded-md">
            <img src={book.imageUrl} alt="arguing" className="w-full" />
            <h2 className="font-bold text-2xl">{book.author}</h2>
            <h3 className="text-white font-bold text-xm">{book.title}</h3>
            <p className="font-semibold text-gray">{book.genre}</p>
            <p>{formattedDate}</p>
            
            <Link to={`/view-book?id=${book.id}`} className="p-1 bg-amber-300 rounded-xl mt-6">View book</Link>
        </div>



    );
}