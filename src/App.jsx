import { createBrowserRouter, RouterProvider } from "react-router";
import AddBook from "./pages/AddBook"
import BookList from "./pages/BookList";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ViewBook from "./pages/ViewBook";
import NotFound from "./pages/NotFound";

const libAppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/addbook", element: <AddBook /> },
  { path: "/booklist", element: <BookList /> },
  { path: "/create-account", element: <CreateAccount /> },
  { path: "/login", element: <Login /> },
  { path: "/view-book", element: <ViewBook /> }, 
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
