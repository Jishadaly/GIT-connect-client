import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from "./pages/Home/Home"
import Explore from "./pages/Explore/Explore"
import UserProfile from "./pages/UserProfile/UserProfile"
import "./App.css"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<UserProfile />} />
      </Routes>
    </Router>
  )
}

export default App
