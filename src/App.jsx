import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Recipes } from "./pages"
import { Footer, Navbar, Sidebar } from "./components"
import { useState } from "react"


function App() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const handleNav = () => {
    setNavIsOpen((prev) => !prev)
  }
  
  return (
    <BrowserRouter>
      <Navbar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Sidebar navIsOpen={navIsOpen} handleNav={handleNav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
