import dominicunsplash from "../assets/images/dominicunsplash.jpg"



export default function BookList() {
  return (

      <div className="flex grid-cols-3 gap-4 mt-10">
      <h1>View all Books</h1>
    
    <div className="bg-gray-300">
      <img src={dominicunsplash} alt="dominicunsplash" className="w-30" />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>
    </div>
   
   <div className="bg-gray-300">
    <img src={dominicunsplash} alt="dominicunsplash" className="w-30" />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>
  </div>

  <div className="bg-gray-300">
   <img src={dominicunsplash} alt="dominicunsplash" className="w-30"  />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>
  </div>
     
  <div className="bg-gray-300">
     <img src={dominicunsplash} alt="dominicunsplash" className="w-30" />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>  
      </div>

      <div className="bg-gray-300">
     <img src={dominicunsplash} alt="dominicunsplash" className="w-30"  />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3>
     </div>

     <div className="bg-gray-300">
      <img src={dominicunsplash} alt="dominicunsplash" className="w-30" />
      <h2 className="font-bold">Best seller</h2>
      <h3 className="text-blue-600 text-xl">Book title</h3> 
      </div>

    </div>
  );
}