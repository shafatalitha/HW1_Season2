import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import CreatePlayList from "./page/createPlaylist/index";
import { useSelector } from "react-redux";
import Navbar from "./Component/navbar/index";
import Login from "./page/login/index";
;


function App() {
  const isLogin = useSelector((state) => state.auth.isLogin);
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path={"/create-playlist"}>
              <Navbar />
              {isLogin ? <CreatePlayList /> : <Redirect to={"/"} />}
            </Route>
            <Route path={"/"}>
              <Login />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
