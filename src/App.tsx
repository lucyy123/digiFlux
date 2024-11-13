
import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Shopping from "./pages/Shopping"
import SignUp from "./pages/SignUp"

function App() {

  return (
    <Router>
      <Routes>
        <Route  path="/" element = {<Navigate to={'/sign-up'}/>} />
        <Route  path = '/sign-up' element = {<SignUp/>} />
        <Route  path = '/shopping' element = {<Shopping/>} />
      </Routes>
    </Router>
  )
}

export default App
