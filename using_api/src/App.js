
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiniDrawer from "./components/Drawer/Drawer";
//import ListProjects from "./components/Project/ListProject";
import MainIndex from "./components/MainIndex";
import AppHeader2 from "./components/Header/AppHeader2"
class App extends Component {
  render() {
    return (
      <div>
        <MiniDrawer/>
        {/*<AppHeader2/>*/}
       <MainIndex/>
      </div>
    )
  }
}

export default App;
