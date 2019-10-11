import React, { Component } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
class AddDefect extends Component {
  constructor(props) {
    super(props);
    this.state = { defects: [], name: null, query: "", count:0};
    //this.state = { id: "", name: "", dateOfBirth: "" };

    this.handleChangeid = this.handleChangeid.bind(this);
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangedescription = this.handleChangedescription.bind(this);
    this.handleChangepriority = this.handleChangepriority.bind(this);
    this.handleChangeseverity = this.handleChangeseverity.bind(this)

    this.handleChangep_id = this.handleChangep_id.bind(this);
    this.handleChangee_id = this.handleChangee_id.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    this.routeListDefect = this.routeListDefect.bind(this);

  }

  //GET ID METHOD
  handleChangeid(e) {
    this.setState({
      txtdefectid: e.target.value
    });
  }

  //GET name METHOD
  handleChangename(f) {
    this.setState({
        txtdefectname: f.target.value
    });
  }

  //GET DESCRIP METHOD
  handleChangedescription(g) {
    this.setState({
      txtdefectdescrip: g.target.value
    });
  }

  handleChangepriority(h) {
    this.setState({
      txtdefectpriority: h.target.value
    });
  }

  handleChangeseverity(i) {
    this.setState({
      txtdefectseverity: i.target.value
    });
  }
//handleChangep_id
handleChangep_id(j) {
    this.setState({
      txtprojectid: j.target.value
    });
  }
  handleChangee_id(k) {
    this.setState({
      txtemployeeid: k.target.value
    });
  }
  //ON SUBMIT FORM METHOD
  onSubmit(e) {
    e.preventDefault();
    const save= {
      id: this.state.txtdefectid,
      defect_name: this.state.txtdefectname,
      defect_description: this.state.txtdefectdescrip,
      priority:this.state.txtdefectpriority,
      severity: this.state.txtdefectseverity,
     
    project: {
        id: this.state.txtprojectid 
    },
    employee: {
        id: this.state.txtemployeeid
    }
   

    };
    //alert(update.data);
    axios.post("http://localhost:8080/test/defectinfo/defect", save).then(res => {
      if (res.status === 200) {
        alert("Defect added successfully.!");
        window.location.reload();
      }
    });

    this.routeListDefect();
  }


  //BACK FUNCTION TO EMPLOYEE lIST
  routeListDefect() {
    let path = `/defects`;
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
          <div class="card mb-3" >
            <div class="card-header">
              
              <h3 align="center"> <b> <i class="fa fa-card"></i> ADD NEW DEFECT</b></h3>
             
              <button className="btn btn-primary" type="submit" onClick={this.routeListDefect}>
              <i className="fa fa-arrow-circle-left  "> Back</i>
            </button>
            </div>

           
            <h4 align="center">Details</h4>

            <div class="card-body">
              <Formik>
                <Form className="container" onSubmit={this.onSubmit}>
                  <fieldset className="form-group">
                    <label>Defect Id</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtid"
                      value={this.txtid}
                      onChange={this.handleChangeid}
                      placeholder="Defect Id Here" 
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Defect Name</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txt_df_name"
                      value={this.state.txt_df_name}
                      onChange={this.handleChangename}
                      placeholder="Defect Name Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Description</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtdescrip"
                      value={this.state.txtdescrip}
                      onChange={this.handleChangedescription}
                      placeholder="Description Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Priority</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtpriority"
                      value={this.state.txtpriority}
                      onChange={this.handleChangepriority}
                      placeholder="Priority Here"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label> Severity</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txtseverity"
                      value={this.state.txtseverity}
                      onChange={this.handleChangeseverity}
                      placeholder="Severity Here"
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
                  <fieldset className="form-group">
                    <label> Employee ID</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="txte_id"
                      value={this.state.txte_id}
                      onChange={this.handleChangee_id}
                      placeholder="Employee ID Here"
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
                    onClick={this.routeListDefect}
                    align="center"
                  >
                    <i className="fa fa-location-arrow"> Cancel</i>
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

export default AddDefect;