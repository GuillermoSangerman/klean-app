import { Routes, Route } from "react-router"
import { Home } from "./pages/Home"
import { MainLayout } from "./components/layout/MainLayout"
import { Services } from "./pages/Services"
import { Contact } from "./pages/Contact"
import { Projects } from "./pages/Projects"
import { Team } from "./pages/Team"
function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
