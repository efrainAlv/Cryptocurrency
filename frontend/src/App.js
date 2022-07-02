import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignUp from './components/signUp/SignUp';
import { SignIn } from './components/signIn/SignIn';
import { Home } from "./components/home/Home";

export function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>

  );
}

export default App;
