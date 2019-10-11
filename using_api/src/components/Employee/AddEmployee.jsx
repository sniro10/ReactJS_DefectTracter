import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: [], name: null, query: "", count:0};
    //this.state = { id: "", name: "", dateOfBirth: "" };

    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedob = this.handleChangedob.bind(this);
    this.handleChangep_id = this.handleChangep_id.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.routeListEmployee = this.routeListEmployee.bind(this);

  }

  //GET ID METHOD
  handleChangeid(e) {
    this.setState({
      txtemployeeid: e.target.value
    });
  }

  //GET DOB METHOD
  handleChangedob(f) {
    this.setState({
      txtemployeedob: f.target.value
    });
  }

  //GET NAME METHOD
  handleChangename(g) {
    this.setState({
      txtemployeename: g.target.value
    });
  }
//handleChangep_id
handleChangep_id(h) {
    this.setState({
      txtprojectid: h.target.value
    });
  }
  //ON SUBMIT FORM METHOD
  onSubmit(e) {
    e.preventDefault();
    const save = {
      id: this.state.txtemployeeid,
      name: this.state.txtemployeename,
      dateOfBirth: this.state.txtemployeedob,
      project: {
        id: this.state.txtprojectid 
    }
    };
    alert(save.data);
    axios.post("http://localhost:8080/test/employeeinfo/employee", save).then(res => {
      if (res.status === 200) {
        alert("Employee Added successfully.!");
        window.location.reload();
      }
    });

    this.setState({
      id: "",
      name: "",
      dateOfBirth: ""
    });

    this.routeListEmployee();
  }

  //BACK FUNCTION TO EMPLOYEE lIST
  routeListEmployee() {
    let path = `/employees`;
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
              
              <h3 align="center"> <b> <i class="fa fa-card"></i> ADD NEW EMPLOYEE</b></h3>
             
              <button className="btn btn-primary" type="submit" onClick={this.routeListEmployee}>
              <i className="fa fa-arrow-circle-left  "> Back</i>
            </button>
            </div>

           
            <h4 align="center">Details</h4>

            <div class="card-body">
              <Formik>
                <Form className="container" onSubmit={this.onSubmit}>
                  <fieldset className="form-group">
                    <label>Employee Id</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtid"
                      value={this.state.txtid}
                      onChange={this.handleChangeid}
                      placeholder="Employee Id Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Employee Name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txt_em_name"
                      value={this.state.txt_em_name}
                      onChange={this.handleChangename}
                      placeholder="Employee Name Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Date Of Birth</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtdob"
                      value={this.state.txtdob}
                      onChange={this.handleChangedob}
                      placeholder="Date of birth Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Project ID</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtp_id"
                      value={this.state.txtp_id}
                      onChange={this.handleChangep_id}
                      placeholder="Project ID Here"
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
                    onClick={this.routeListEmployee}
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

export default AddEmployee;