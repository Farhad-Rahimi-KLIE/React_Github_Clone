import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Components/Home'
import Issue from "./Components/Issue";
import PullRequest from "./Components/PullRequest";
import NewRepo from "./Components/NewRepo";
import Overview from "./Components/Overview";
import Profile from "./Components/Profile";
import Blieve from "./Components/Blieve";
function App() {
  return (
    <div>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blieve/>}/>
        <Route path="/overview" element={<Overview/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/issue" element={<Issue/>}/>
        <Route path="/pull" element={<PullRequest/>}/>
        <Route path="/newrepo" element={<NewRepo/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
