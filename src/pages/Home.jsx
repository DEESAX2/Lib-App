import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import libapp from "../assets/images/libapp.jpeg";
import influencebias from "../assets/images/influencebias.jpg";
import intelligence from "../assets/images/intelligence.jpg";
import standout from "../assets/images/standout.jpg";
import solveit from "../assets/images/solveit.jpg";
import theidiotbrain from "../assets/images/theidiotbrain.jpg";
import artoflogic from "../assets/images/artoflogic.jpg";
import { Link } from "react-router";


export default function Home() {
    return (
        <>
            <Navbar className ="p-2" />
            <section className="flex flex-col items-center justify-center pt-28 md:pt-28 lg:pt-28">
                <img src={libapp} alt="" className="w-[100%] bg-fixed" />
                <h1 className="text-6xl text-center font-bold gap-4">WELCOME TO BOOKS HAVEN</h1>

                <img src="{}" alt="" />

            </section>

            <section>

                {/* Featured Books Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { slug: "the-illusion-of-choice", title: "The Illusion of choice", author: "Richard Shotton", cover: influencebias },
                        { slug: "the-intelligence-trap", title: "The Intelligence Trap", author: "David Robson", cover: intelligence },
                        { slug: "how-to-stand-out", title: "How to Stand Out", author: "Dr.Rob Yeun", cover: standout },
                        { slug: "how-to-solve-it", title: "How to Solve it", author: "George Polya", cover: solveit },
                        { slug: "the-idiot-brain", title: "The Idiot Brain", author: "Dean Burnett", cover: theidiotbrain },
                         { slug: "the-art-of-logic", title: "The Art Of Logic", author: "Dean Burnett", cover: artoflogic },
                        
                    ].map((book, idx) => (
                        <Link
                            to={`/view-book/${book.slug}`}
                            key={idx}
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-lg transition"
                        >
                            <img src={book.cover} alt={book.title} className="w-32 h-40 object-cover mb-4 rounded" />
                            <h3 className="text-lg font-bold">{book.title}</h3>
                            <p className="text-gray-600">{book.author}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}