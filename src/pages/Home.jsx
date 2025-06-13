import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import influencebias from "../assets/images/influencebias.jpg";
import intelligence from "../assets/images/intelligence.jpg";
import standout from "../assets/images/standout.jpg";
import solveit from "../assets/images/solveit.jpg";
import { Search } from "lucide-react";
import { useTranslation } from "react-i18next";
import des from "../assets/images/des.jpg";
import earl from "../assets/images/earl.jpeg";
import Hero2 from "../assets/images/Hero2.jpeg";
import video from "../assets/video/video.mp4";
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
            
            {/* Hero Section */}
            <section className="relative">
                <div className="relative w-full  h-64 sm:h-80 md:h-[600px] lg:h-[700px] overflow-hidden">
                    <video
                        src={video}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay 
                        loop 
                        playsInline 
                        muted
                    ></video>
                    <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center px-4">
                        <h1 className="text-big-heading sm:text-3xl md:text-4xl lg:text-5xl text-white text-center font-bold drop-shadow-lg">
                            {t("welcomeMessage")}
                        </h1>
                        <div className="flex justify-center mt-16 sm:mt-8 md:mt-10 w-full max-w-md">
                            <input 
                                type="search" 
                                name="book" 
                                id="book" 
                                placeholder="Search book" 
                                className="bg-beige p-2 rounded-l-md w-full focus:outline-none" 
                            />
                            <button className="bg-yellow-400 p-2 rounded-r-md hover:bg-yellow-500 transition-colors">
                                <a href="http://localhost:5173/booklist"><Search className="text-black" /></a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Books Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8">
                <h1 className="text-center text-sub-heading sm:text-2xl md:text-3xl font-bold py-4 sm:py-6">
                    FIND THESE AND MANY MORE FROM OUR DIVERSE BOOK LIST
                </h1>
                
                <div className="overflow-x-auto px-4">
                    <div className="flex gap-4 sm:gap-6 md:gap-8 pb-4 min-w-max">
                        {[
                            { src: influencebias, alt: "Influence Bias book" },
                            { src: intelligence, alt: "Intelligence book" },
                            { src: standout, alt: "Standout book" },
                            { src: solveit, alt: "Solve It book" },
                            { src: idiotbrain, alt: "Idiot Brain book" },
                            { src: intelligencetrap, alt: "Intelligence Trap book" },
                            { src: artoflogic, alt: "Art of Logic book" },
                            { src: arguing, alt: "Arguing book" }
                        ].map((book, index) => (
                            <div 
                                key={index}
                                className="flex-shrink-0 bg-beige bg-opacity-10 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition-all duration-300 p-4 w-48 sm:w-56 md:w-64"
                            >
                                <img 
                                    src={book.src} 
                                    alt={book.alt} 
                                    className=" animate-scroll-projects w-full h-auto object-contain rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="px-4 sm:px-6 md:px-8 lg:px-16 py-8">
                <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold py-4 sm:py-6">
                    MEET OUR TEAM
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center">
                    {[
                        { img: des, name: "Desmond Kponyo", role: "Back-end Web Developer" },
                        { img: earl, name: "Earl Osafo-Ohemeng", role: "Front-end Web Developer" },
                        { img: Hero2, name: "Esther Manor", role: "Front-end Web Developer" },
                        { img: sandra, name: "Sandra Allotey", role: "Front-end Web Developer" }
                    ].map((member, index) => (
                        <div 
                            key={index}
                            className="bg-white bg-opacity-10 rounded-2xl shadow-lg hover:shadow-black transition-all duration-300 p-6 flex flex-col items-center"
                        >
                            <img 
                                src={member.img} 
                                alt={member.name} 
                                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover mb-4 border-2 border-yellow-400"
                            />
                            <p className="text-black font-bold text-center">
                                {member.name} <br />
                                <span className="font-normal text-sm sm:text-base">{member.role}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}