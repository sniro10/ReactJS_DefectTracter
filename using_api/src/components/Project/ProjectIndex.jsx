import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProject from "./ListProject";
import AddProject from "./AddProject";
import EditProject from "./EditProject";


class ProjectIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/projects" exact component={ListProject} />
          <Route path="/AddProject" exact component={AddProject} />
          <Route path="/EditProject/:id" exact component={EditProject}/>
          <Route path="/BackProjectList" exact component={ListProject} />

      
        </Switch>
      </Router>
    );
  }
}

export default ProjectIndex;
