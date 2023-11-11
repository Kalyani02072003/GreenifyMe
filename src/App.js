
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import Signup from './components/Signup/Signup';
import Blog from './components/Blog/Blog';

function App() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
        if (user) {
            setUserName(user.displayName);
        } else setUserName("");
        });
    }, []);
    return (
        <div>
            <Router>
                <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* <Route path="/explore" element={<Explore />} /> */}
                <Route path="/" element={<Home name={userName} />} />
                <Route path="/logout" element={<Login />} />
                <Route path="/blogs" element={<Blog name={userName} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
