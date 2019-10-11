import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [], name: null };
    this.state = { id: "", project_name: "", project_description: "" };
    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedescrip = this.handleChangedescrip.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.routeListProject = this.routeListProject.bind(this);
  }

  //GET ID METHOD
  handleChangeid(e) {
    this.setState({
      txtprojectid: e.target.value
    });
  }

  //GET ISBN METHOD
  handleChangedescrip(f) {
    this.setState({
      txtprojectdescrip: f.target.value
    });
  }

  //GET NAME METHOD
  handleChangename(g) {
    this.setState({
      txtprojectname: g.target.value
    });
  }

  //ON SUBMIT FORM METHOD
  onSubmit(e) {
    e.preventDefault();
    const save = {
      id: this.state.txtprojectid,
      project_name: this.state.txtprojectname,
      project_description: this.state.txtprojectdescrip
    };
    axios.post("http://localhost:8080/test/projectinfo/project", save).then(res => {
      if (res.status === 200) {
        alert("Project Added successfully.!");
        window.location.reload();
      }
    });

    this.setState({
      id: "",
      project_name: "",
      project_description: ""
    });

    this.routeListProject();
  }

  //BACK FUNCTION TO BOOK lIST
  routeListProject() {
    let path = `/projects`;
    this.props.history.push(path);
  }

  //RENDERING PATTERN
  render() {
    return (
      <div className="row">
        <br />
        <br />
        <br />
        <div className="col-sm-2" > </div>
        <div className="col-sm-8" >
          
          <br />
          <div class="card mb-3" onLoad={this.refreshProject}>
            <div class="card-header">
              
              <h3 align="center"> <b> <i class="fa fa-card"></i> ADD PROJECT</b></h3>
             
              <button className="btn btn-primary" type="submit" onClick={this.routeListProject}>
              <i className="fa fa-arrow-circle-left  "> Back</i>
            </button>
            </div>

           
            <h4 align="center">Details of Project</h4>

            <div class="card-body">
              <Formik>
                <Form className="container" onSubmit={this.onSubmit}>
                  <fieldset>
                    <label>Project Id</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtid"
                      value={this.state.txtid}
                      onChange={this.handleChangeid}
                      placeholder="Project Id Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Project Name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtprojectname"
                      value={this.state.txtprojectname}
                      onChange={this.handleChangename}
                      placeholder="Project Name Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Project Description</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtprojectdescrip"
                      value={this.state.txtprojectdescrip}
                      onChange={this.handleChangedescrip}
                      placeholder="Description Here"
                    />
                  </fieldset>
                  <button
                    className="btn btn-success"
                    value="Submit"
                    type="submit"
                    align="center"
                  >
                    <i className="fa fa-plus"> Add</i>
                  </button>
                  &nbsp;
            <button
                    className="btn btn-danger"
                    type="reset"
                    onClick={this.routeListProject}
                    align="center"
                  >
                    <i className="fa fa-location-arrow"> cancel</i>
                  </button>
                  <br />
                  &nbsp; &nbsp; &nbsp;
          </Form>
              </Formik>
            </div>
            <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;