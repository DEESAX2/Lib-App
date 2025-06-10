export default function BookCard({ image }) {
    return (
        <div className="bg-gray-300">
            <img src={image} alt="arguing" className="w-full" />
            <h2 className="font-bold">Best seller</h2>
            <h3 className="text-blue-600 text-xl">Book title</h3>
        </div>
    );
}