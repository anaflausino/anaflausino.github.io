import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import App from "./components/App";
import Posts from "./components/Posts/Posts";
import Partners from "./components/Partners/Partners";

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/parceiros" element={<Partners />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;
