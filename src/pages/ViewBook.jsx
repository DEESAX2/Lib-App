import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function ViewBook() {
    return (
        <>
            <Navbar />
            <section>
                <h1>View Book Page</h1>

                <h2 className="m-10">Book List</h2>
                
                <div>
                    <ul className="flex flex-row">
                    <li>Reading </li>
                     <li> Available</li>   
                    <li>Completed</li>
                    <li> Borrow</li>
                </ul>
                </div>
                
            </section>
            <Footer />
        </>
    )
}