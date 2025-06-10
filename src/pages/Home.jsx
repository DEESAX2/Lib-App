import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import image from "../assets/images/libapp.jpeg";
import image from "../assets/images/influencebias.jpg";
import image from "../assets/images/inteligence.jpg";
import image from "../assets/images/standout.jpg";
import image from "../assets/images/solveit.jpg";




export default function Home() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center h-screen">
                <img src={image} alt="" className="w-[100%]" />
                <h1 className="text-6xl text-center font-bold">WELCOME TO BOOKS HAVEN</h1>

                <div className="flex flex-col items-center justify-center mt-4">
                    <button>Who is reading</button>
                    <select name="persona" id="persona">
                        <option selected disabled>Select</option>
                        <option value="kids">Kids</option>
                        <option value="teens">Teens</option>
                        <option value="adults">Adults</option>

                    </ select>
                    <div className="flex flex-row p-6 justify-around space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">KIDS</button>
                        <button className="bg-red-800 text-white px-4 py-2 rounded-xl">TEENS</button>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-xl">ADULTS</button>
                    </div>

                  <div>
    {/* Book List Section */}
    <h2 className="text-2xl font-semibold mb-4 text-center">Featured Books</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
            { title: "The Illusion of Choice", author: "Richard Shotton"},
            { title: "The Intelligence trap", author: "David Robeson"},
            { title: "To Kill a Mockingbird", author: "Harper Lee" }
        ].map((book, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-600">by {book.author}</p>
            </div>
        ))}
    </div>
</div>



                </div>

            </section>
            <Footer />n
        </>
    );
}