import { BrowserRouter as Router, Route } from "react-router-dom"

import { GlobalStyles } from "./styles/GlobalStyles"

import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"

export function App() {
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
      <GlobalStyles />
    </>
  )

}