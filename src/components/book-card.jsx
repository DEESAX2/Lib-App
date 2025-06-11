import { Link } from "react-router"

export default function BookCard({ book }) {
    return (
        <Link to="/view-book">
            <div className="bg-gray-300">
                <img src={book.image} alt="arguing" className="w-full" />
                <h2 className="font-bold">{book.author}</h2>
                <h3 className="text-blue-600 text-xl">{book.title}</h3>
            </div>
        </Link>
    );
}