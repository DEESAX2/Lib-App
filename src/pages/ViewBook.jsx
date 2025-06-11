import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import artoflogic from "../assets/images/artoflogic.jpg";



export default function ViewBook() {
    return (
        <>
            <Navbar />
            <section className="mt-40">

                <h2 className=" text-3xl font-bold text-center">View Book</h2>

                <div className="grid grid-cols-3 m-20">

                    <div><img src={artoflogic} alt="artoflogic" className="w-60 flex flex-col justify-center" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold">The Art Of Logic</h1>
                        <h3 className="mb-10">Eugenia Cheng</h3>
                        <h4>Synopsis</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus impedit fugit neque sapiente cumque corrupti, illum facere aliquid ipsam omnis reprehenderit totam ducimus, culpa exercitationem enim eveniet similique quibusdam voluptas consectetur dolore porro magnam laboriosam repellendus. Labore quia suscipit veniam.</p>
                    </div>

                    <div>
                        <button className="bg-amber-300 p-5 cursor-pointer">Edit</button>
                        <button className="bg-red-500 p-5 cursor-pointer">Delete</button>
                    </div>

                </div>

                <div><h3 className="mt-20 font-bold text-2xl text-center">GENRE</h3>
                    <div className="flex flex-row justify-evenly p-20 bg-amber-600"><p>Fiction</p><p>Non-Fiction</p><p>Religious</p><p>Politics</p><p>Climate</p></div>
                </div>

            </section>
            <Footer />
        </>
    )
}