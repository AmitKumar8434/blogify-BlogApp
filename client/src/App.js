import React, { useContext } from "react";
import TopBar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
           { user?<Home/>:<Register />}
        </Route>
        <Route path="/about">
           <About/>
        </Route>
        <Route path="/contact">
           <Contact/>
        </Route>
        <Route path="/login">
          { user ?<Home/>:<Login/>}
        </Route>
        <Route path="/write">
          {user?<Write/>:<Register/>}
        </Route>
        <Route path="/settings">
          {user? <Settings/>:<Register/>}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
      </Router>
  );
}
export default App;
