import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import image from "../assets/images/libapp.jpeg";


export default function Home() {
    return (
        <>
            <Navbar />
            <section className="flex flex-col items-center justify-center h-screen">
                <img src={image} alt=""  className="w-[100%]"/>
                <h1 className="text-6xl text-center font-bold">WELCOME TO BOOKS HAVEN</h1>

        <div className="flex flex-col items-center justify-center mt-4">
     <button>Who is reading</button>
        <select name="persona" id="persona">
         <option selected disabled>Select</option> 
         <option value="kids">Kids</option>
            <option value="teens">Teens</option>
            <option value="adults">Adults</option>

</ select>
<div className="flex flex-row p-4 justify-around space-x-4">
 <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">KIDS</button>
<button className="bg-red-800 text-white px-4 py-2 rounded-xl">TEENS</button>
 <button className="bg-pink-500 text-white px-4 py-2 rounded-xl">ADULTS</button>
        </div>
                        
        

         </div>
                
            </section>
            <Footer />n
        </>
    );
}