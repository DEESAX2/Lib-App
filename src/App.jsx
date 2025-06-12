import { createBrowserRouter, RouterProvider } from "react-router";
import AddBook from "./pages/AddBook"
import EditBook from "./pages/EditBook";
import BookList from "./pages/BookList";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewBook from "./pages/ViewBook";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./i18n";

const libAppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/add-book", element: <AddBook /> },
  { path: "/edit-book", element: <EditBook /> },
  { path: "/booklist", element: <BookList /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <Login /> },
  { path: "/view-book/:slug", element: <ViewBook /> }, 
  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={libAppRouter} />
    </>
  );
}
export default App;
