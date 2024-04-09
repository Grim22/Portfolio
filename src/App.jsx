import { BrowserRouter, Route,Routes } from "react-router-dom"
import Index from "./Index.jsx"
import Email from "./components/Email.jsx"

function App() {

  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/email" element={<Email />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
