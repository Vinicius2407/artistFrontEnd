import { BrowserRouter as Router, Route } from "react-router-dom"

import { GlobalStyles } from "./styles/GlobalStyles"

import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { useState } from "react"

export function App() {
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  return (
    <Router>
      <Header />
      <Route path="/" exact component={SignIn} />
      <Route path="/sing-up"  component={SignUp} />
      <Route path="/home" component={Home} />
      <Footer />
      <GlobalStyles />
    </Router>
  )

}