import arguing from "../assets/images/arguing.jpg"
import artoflogic from "../assets/images/artoflogic.jpg"
import idiotbrain from "../assets/images/idiotbrain.jpg"
import influencebias from "../assets/images/influencebias.jpg"
import standout from "../assets/images/standout.jpg"
import BookCard from "../components/book-card"


export default function BookList() {
  return (
    <section>
      <div><h1 className="text-2xl font-semibold text-center m-10">View all Books</h1></div>

      <div className="grid grid-cols-4 gap-4 m-10">
        <BookCard image={arguing} />
        <BookCard image={artoflogic} />
        <BookCard image={idiotbrain} />
        <BookCard image={influencebias} />
        <BookCard image={standout} />
      </div>
    </section>
  );
}