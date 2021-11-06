import React from "react";
import {About} from "./components/about";
import {Home} from "./components/home";
import {DatatablePage as Done} from "./components/done"
import {DatatablePage as Accepted} from "./components/accepted"
import {Header} from "./components/Header";
import {DatatablePage as Waiting} from "./components/waiting";
import {Redirect, Switch,Route, BrowserRouter as Router} from "react-router-dom";
import {Login} from "./components/login";
import {Logout} from "./components/logout";

function App() {

  // let auth=sessionStorage.getItem("JWT");
  // console.log(auth)
  return (
    <Router>
      <Switch>   
        <Route path={"/login"} component={Login}/>
        <Route path={"/logout"} component={Logout}/>
        <Route path={"/home"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<><Header home={true}/><div className="mainbody"> <Home/></div></>}}/>
        <Route path={"/done"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<><Header done={true}/><div className="mainbody"> <Done/></div></>}}/>
        <Route path={"/accepted"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<><Header accepted={true}/><div className="mainbody"> <Accepted/></div></>}}/>
        <Route path={"/waiting"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<><Header waiting={true}/><div className="mainbody"> <Waiting/></div></>}}/>
        <Route path={"/about"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<><Header about={true}/><div className="mainbody"> <About/></div></>}}/>
        <Route path={"/"} component={()=>{return !sessionStorage.getItem("JWT")? <Redirect to="/login" />:<Redirect to="/home" />}}/>
          
        </Switch>
   
    </Router>
  );
}
export default (App)