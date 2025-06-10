// import dominicunsplash from "../assets/images/dominicunsplash.jpg"
import arguing from "../assets/images/arguing.jpg"
import artoflogic from "../assets/images/artoflogic.jpg"
import idiotbrain from "../assets/images/idiotbrain.jpg"
import influencebias from "../assets/images/influencebias.jpg"
import standout from "../assets/images/standout.jpg"


export default function BookList() {
  return (

    <section>
    
    <div><h1 className="text-2xl font-semibold text-center m-10">View all Books</h1></div>
    
     <div className="flex grid-cols-3 gap-4 m-10">
      {/* <div className="bg-gray-300">
      <img src={dominicunsplash} alt="dominicunsplash" className="w-60" />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>
    </div> */}

      <div className="bg-gray-300">
        <img src={arguing} alt="arguing" className="w-60" />
        <h2 className="font-bold">Best seller</h2>
        <h3 className="text-blue-600 text-xl">Book title</h3>
      </div>

      <div className="bg-gray-300">
        <img src={artoflogic} alt="artoflogic" className="w-60" />
        <h2 className="font-bold">Best seller</h2>
        <h3 className="text-blue-600 text-xl">Book title</h3>
      </div>

      <div className="bg-gray-300">
        <img src={idiotbrain} alt="idiotbrain" className="w-60" />
        <h2 className="font-bold">Best seller</h2>
        <h3 className="text-blue-600 text-xl">Book title</h3>
      </div>

      <div className="bg-gray-300">
        <img src={influencebias} alt="influencebias" className="w-60" />
        <h2 className="font-bold">Best seller</h2>
        <h3 className="text-blue-600 text-xl">Book title</h3>
      </div>

      <div className="bg-gray-300">
        <img src={standout} alt="standout" className="w-60" />
        <h2 className="font-bold">Best seller</h2>
        <h3 className="text-blue-600 text-xl">Book title</h3>
      </div>

    </div>
    </section>
  );
}