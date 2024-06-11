import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProfilePage from "./pages/ProfilePage";
import FeedPage from "./pages/FeedPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
        { path: "/", element: < IndexPage /> }, 
        { path: "/login", element: < LoginPage /> }, 
        { path: "/signup", element: < SignUpPage /> }, 
        { path: "/edit-profile", element: < EditProfilePage /> },
        { path: "/profile", element: < ProfilePage /> },
        { path: "/feed", element: < FeedPage /> },
    ],
  },
]);

export default router;