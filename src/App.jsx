import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddBook from "./pages/AddBook"
import BookList from "./pages/BookList";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewBook from "./pages/ViewBook";
import NotFound from "./pages/NotFound";
import EditBook from "./pages/EditBook";

const libAppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/addbook", element: <AddBook /> },
  { path: "/booklist", element: <BookList /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <Login /> },
  { path: "/view-book/:id", element: <ViewBook /> }, 
  { path: "/edit-book/:id", element: <EditBook /> },
  { path: "*", element: <NotFound /> }
]);

function App() {
  return (
    <>
      <RouterProvider router={libAppRouter} />
    </>
  );
}
export default App;
