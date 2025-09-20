import App from "./App";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";

const routes = [
    {
        path:"/",
        element: <LandingPage />,
    },
    {
        path:"/auth",
        element: <AuthPage />
    }
];

export default routes;