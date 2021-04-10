
import React, { useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useStateValue } from "./StateProvider";



const App = () => {
  const [{user}, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login></Login>
        
      ): (
        <div className="app__body">
          <Router>
            <Switch>
              <Route path="/rooms/:roomId">
                {/* Sidebar */}
                <Sidebar></Sidebar>
  
                {/* Chat */}
                <Chat></Chat>
              </Route>
  
  
              <Route path="/">
              
                <Sidebar></Sidebar>
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
       </div>

  );
};

export default App;
