import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import App from "./components/App";
import About from "./components/About/About";
import Stories from "./components/Stories/Stories";
import Posts from "./components/Posts/Posts";
import Contact from "./components/Contact/Contact";

function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/contato" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;
