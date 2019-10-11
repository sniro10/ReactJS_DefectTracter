import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProject from "./Project/ListProject"
import AddProject from "./Project/AddProject";
import EditProject from "./Project/EditProject";

import ListEmployee from "./Employee/ListEmployee"
import AddEmployee from "./Employee/AddEmployee"
import EditEmployee from "./Employee/EditEmployee"

import ListDefect from "./Defect/ListDefect";
import EditDefect from "./Defect/EditDefect";
import AddDefect from "./Defect/AddDefect";

class ProjectIndex extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Projects" exact component={ListProject} />
          <Route path="/AddProject" exact component={AddProject} />
          <Route path="/EditProject/:id" exact component={EditProject}/>
          <Route path="/BackProjectList" exact component={ListProject} />

          <Route path="/Employees" exact component={ListEmployee} />
          <Route path="/AddEmployee" exact component={AddEmployee} />
          <Route path="/EditEmployee/:id" exact component={EditEmployee} />

          <Route path="/Defects" exact component={ListDefect} />
          <Route path="/EditDefect/:id" exact component={EditDefect} />
          <Route path="/AddDefect" exact component={AddDefect} />

        </Switch>
      </Router>
    );
  }
}

export default ProjectIndex;
