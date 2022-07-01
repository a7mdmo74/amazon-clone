import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./Pages/User/User";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
