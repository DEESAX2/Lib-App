import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import newhero from "../assets/images/newhero.jpeg";
import influencebias from "../assets/images/influencebias.jpg";
import intelligence from "../assets/images/intelligence.jpg";
import standout from "../assets/images/standout.jpg";
import solveit from "../assets/images/solveit.jpg";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import des from "../assets/images/des.jpg";
import earl from "../assets/images/earl.jpeg";
import Hero2 from "../assets/images/Hero2.jpeg";
import video from "../assets/video/video.mp4"
import sandra from "../assets/images/sandra.jpeg";
import intelligencetrap from "../assets/images/intelligencetrap.jpg";
import artoflogic from "../assets/images/artoflogic.jpg";
import arguing from "../assets/images/arguing.jpg";
import idiotbrain from "../assets/images/idiotbrain.jpg";


export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Navbar />
            <section className="relative">
                <video src={video} className=" md:w-full lg:w-screen" autoPlay
                    loop
                    playsInline
                    controls={false}></video>
               
                <h1 className=" text-3xl text-black text-center font-bold ">{t("welcomeMessage")}</h1>
                <div className=" flex justify-center mt-10  md:mt-10 ">
                    <input type="search" name="book" id="book" placeholder="Search book" className=" bg-beige p-2 rounded-md" />
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer"><Search className="" /></a>
                </div>



            </section>

            <section>

                {/* Featured Books Section */}
                <h1 className="text-center pt-6 font-bold ">FIND THESE AND MANY MORE FROM OUR DIVERSE BOOK LIST</h1>
                <div class="overflow-x-hidden">
                <div className=" animate-scroll-projects flex bg-white bg-opacity-10 rounded-2xl w-[80%] mt-10 gap-10 mx-16">

                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={influencebias} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={intelligence} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={standout} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={solveit} alt="book" />
                    </div>

                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={idiotbrain} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={intelligencetrap} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={artoflogic} alt="book" />
                    </div>
                    <div className="bg-beige bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-yellow-400/40 transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={arguing} alt="book" />
                    </div>
                    </div>

                </div>
            </section>

            <section >
                <h1 className="text-center pt-6 font-bold">MEET OUR TEAM</h1>
                <div className="grid grid-cols-4 mt-10 w-[80%] mx-30">
                    <div className="bg-sandy gap-20 bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-black transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={des} alt="Desmond" />
                        <p className="text-black font-bold"> Desmond Kponyo <br />Back-end Web Developer</p>
                    </div>
                    <div className="bg-sandy gap-20 bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-black transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={earl} alt="Earl" />

                        <p className="text-black font-bold"> Earl Sarpong <br /> Front-end Web Developer</p>
                    </div>
                    <div className="bg-sandy gap-20 bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-black transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={Hero2} alt="Esther" />
                        <p className="text-black font-bold"> Esther Manor <br />Front-end Web Developer</p>
                    </div>
                    <div className="bg-sandy gap-20 bg-opacity-10 rounded-2xl shadow-2xl hover:shadow-black transition-shadow duration-300 p-8 flex flex-col items-center min-w-[300px] max-w-xs">
                        <img src={sandra} alt="Esther" />
                        <p className="text-black font-bold"> Sandra Allotey <br />Front-end Web Developer</p>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}