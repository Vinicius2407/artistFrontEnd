import { BrowserRouter as Router } from "react-router-dom"

import { GlobalStyles } from "./styles/GlobalStyles"

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Routes } from "./routes/routes"

export function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyles />
    </Router>
  )

}