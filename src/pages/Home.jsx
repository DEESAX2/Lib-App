import Navbar from "../components/Navbar"
import Footer from "../components/Footer";


export default function Home() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl text-center font-bold">View Book Page</h1>
                
            </section>
            <Footer />
        </>
    )
}