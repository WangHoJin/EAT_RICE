import { BrowserRouter as Router } from "react-router-dom";

import PublicRoute from "./lib/PublicRoute.js";
import PrivateRoute from "./lib/PrivateRoute";
import Main from "./pages/Main/index.jsx";
import Header from "./components/Header/index.jsx";
import LogIn from "./pages/LogIn/index.jsx";
import SignUp from "./pages/SignUp/index.jsx";

import MyPage from "./pages/MyPage/index.jsx";

import PreferenceTest from "./pages/PreferenceTest/index.jsx";

import Ranking from "./pages/Ranking/index.jsx";
import EatingHabitsReport from "./pages/EatingHabitsReport/index.jsx";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <PublicRoute path="/" exact={true} component={Main} />
        <PublicRoute path="/login" exact={true} component={LogIn} />
        <PublicRoute path="/signup" exact={true} component={SignUp} />
        <PublicRoute path="/mypage" exact={true} component={MyPage} />


        <PublicRoute path="/test" exact={true} component={PreferenceTest} />

        <PublicRoute path="/ranking" exact={true} component={Ranking} />
        <PublicRoute path="/report" exact={true} component={EatingHabitsReport} />

      </Router>
    </div>
  );
}

export default App;
