import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegistrationForm from "./components/Signup";
import Headers from "./components/Header";
import SampleRenderprops from "./components/SampleRenderProps";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Headers />
      <Routes>
        <Route path = {"/"} element = {<h1> This is on Home page</h1>}/>
        <Route path = {"/contact"} element = {<h1> This is on Contact page</h1>}/>
        <Route path = {"/about"} element = {<h1> This is on About page</h1>}/>
        <Route path = {"/Signup"} element = {<h1> This is on Signup page</h1>}/>
        <Route path={"/sample"} element = {<SampleRenderprops />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;