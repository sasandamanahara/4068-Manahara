import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./slices/userSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import About from "./components/About";
import ViewTours from "./components/ViewTours";
import CreateTour from "./components/CreateTour";
import UpdateTour from "./components/UpdateTour"; // Add this import

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />

          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<ViewTours />} />
          <Route path="/createtour" element={<CreateTour />} />
          <Route path="/updatetour/:id" element={<UpdateTour />} /> {/* New Route */}
          {/* ... other routes */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
