import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SignUp from './components/signUp/SignUp';
import { SignIn } from './components/signIn/SignIn';
import { Home } from "./components/home/Home";

export function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
