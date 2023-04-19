import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import MainLayout2 from "../Layout/MainLayout2";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
        ]
    },
    {
        path: '/',
        element: <MainLayout2/>,
        children: [
            {
                path: '/about',
                element: <AboutPage/>
            },
        ]
    },
])

export default router;