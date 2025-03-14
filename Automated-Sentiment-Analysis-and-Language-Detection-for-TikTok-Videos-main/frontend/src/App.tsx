import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import DetailsPage from "./pages/DetailsPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/details" element={<DetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
