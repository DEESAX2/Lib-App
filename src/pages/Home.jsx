import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import newhero from "../assets/images/newhero.jpeg";
import influencebias from "../assets/images/influencebias.jpg";
import intelligence from "../assets/images/intelligence.jpg";
import standout from "../assets/images/standout.jpg";
import solveit from "../assets/images/solveit.jpg";
import theidiotbrain from "../assets/images/theidiotbrain.jpg";
import artoflogic from "../assets/images/artoflogic.jpg";
import { Link } from "react-router";
import anotherhero from "../assets/images/anotherhero.jpg";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <section className="hero-image bg-[url(./assets/images/anotherhero.jpg)] h-[596px] bg-cover w-[100%] md:[100%] mx-auto relative  mt-39 md:mt-39"> 
                <h1 className=" text-3xl text-black text-center font-bold ">{t("welcomeMessage")}</h1>
              <div className=" flex justify-center mt-50  md:mt-50 ">
              <input type="search" name="book" id="book" placeholder="Search book" className=" bg-beige p-2 rounded-md" />
               <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><Search  className="" /></a>
               </div>
        


            </section>

            <section>

                {/* Featured Books Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-40 w-[90%] mx-20 g-white bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300">
                    <img src={influencebias} alt="book" />
                     <img src={intelligence} alt="book" />
                 <img src={standout} alt="book" />
                  <img src={solveit} alt="book" />
                   <img src={theidiotbrain} alt="book" />
                    <img src={artoflogic} alt="book" />
                     <img src={influencebias} alt="book" />
                     <img src={influencebias} alt="book" />
                </div>
            </section>

            <section>
                 <img src={newhero} alt="" className="w-screen gap-20   mt-39 md:mt-39" />
            </section>

            <Footer />
        </>
    );
}