import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import openbook from "../assets/images/openbook.png";
import artoflogic from "../assets/images/artoflogic.jpg";
import arguing from "../assets/images/arguing.jpg"


export default function ViewBook() {
    return (
        <>
            <Navbar />
            <section>
                <h1>View Book Page</h1>

                <h2 className="m-10 text-3xl font-bold text-center">Book List</h2>

                <div className="flex flex-row text-xl font-semibold gap-4">
                    <button className="bg-green-400 border-1 rounded"><p>Reading</p></button>
                    <button className="bg-green-400 border-1 rounded">Available </button>
                    <button className="bg-green-400 border-1 rounded">Completed</button>
                    <button className="bg-green-400 border-1 rounded">Borrow</button>
                </div>

            

                <div className="flex flex-row mt-3">
                    <img src={artoflogic} alt="artoflogic" className="w-40" />

                     <img src={artoflogic} alt="artoflogic" className="w-40" />
                    
                </div>

            </section>
            <Footer />
        </>
    )
}