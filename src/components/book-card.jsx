import { Link } from "react-router"

export default function BookCard({ book }) {
console.log('bookd',book)

    return (
        
        <div className="bg-gray-300">
            <img src={book.imageUrl} alt="arguing" className="w-full" />
            <h2 className="font-bold">{book.author}</h2>
            <h3 className="text-blue-600 text-xl">{book.title}</h3>
            <p>{book.genre}</p>
            <p>{book.date}</p>
            
            <Link to={`/view-book?id=${book.id}`}>View book</Link>
        </div>



    );
}