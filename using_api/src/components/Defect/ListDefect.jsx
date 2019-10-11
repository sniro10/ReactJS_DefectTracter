import React, { Component } from 'react'
import axios from "axios";
import "@fortawesome/fontawesome-free/css/all.min.css";
class ListDefect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { defects: [], name: null };
   

    this.deleteDefect = this.deleteDefect.bind(this);
    this.refreshDefect = this.refreshDefect.bind(this);
    this.routeAddDefect = this.routeAddDefect.bind(this);
    //this.returnMsg = this.returnMsg.bind(this);
    
  }
 
  //REDIRECT PAGE
  routeAddDefect() {
    let path = `/AddDefect`;
    this.props.history.push(path);
  }

  componentDidMount() {
    axios.get("http://localhost:8080/test/defecteinfo/defect").then(response => {
      this.setState({ defects: response.data });
      
      //console.table(response.data);
      console.warn("Defect Service is working");
      
    });
    
    // CALLING REFRESH PROJECTMETHOD
    this.refreshDefect();
  }

  //REFRESH PROJECT METHOD
  refreshDefect() {
    axios.get("http://localhost:8080/test/defectinfo/defect").then(response => {
      console.warn("Refresh Service is working");
      this.setState({ defects: response.data });
    });
    
  }
  /*END OF REFRESH METHOD */

  //Route Edit Employee
  routeEditDefect(id) {
    
    // this.props.history.push(pathedit);
    this.props.history.push(`/EditDefect/${id}`);
  }

  
  //DELETE-METHOD 
  deleteDefect(id) {
    axios
      .delete("http://localhost:8080/test/defectinfo/defect/" + id)
      .then(response => {
        console.warn("Delete Service is working");
        this.refreshDefect(response);

        alert(" Defect deleted successfully");
        
      });
  }
  /*END OF DELETE METHOD 

 /*  returnMsg() {
    $("#modelUpdate_msg").html("");
      
    }*/

  render() {
    return (
      <div className="row" >
        <br />
        <div className="col-sm-2" > </div>
        <div className="col-sm-8" >
        
        <br />
       { /*<div className="container" onLoad={this.refreshProject}>  
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.routeAddProject}
          >
            <i className="fa fa-plus"> Add</i>
          </button>
          <br />

          <br />

          <table className="table">
            <thead>
              <tr>
                <th>PROJECT-ID</th>
                <th>PROJECT-NAME</th>
                <th>PROJECT-DESCRIPTION</th>
                <th> &nbsp; &nbsp; &nbsp; &nbsp;ACTION</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projects.map(project => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.project_name}</td>
                  <td>{project.project_description}</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditProject(project.id)}
                      >
                        Edit
                      </i>
                    </button>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => window.confirm(
                          "Are you sure you wish to delete this Project? "
                        ) && this.deleteProject(project.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

*/}
<br />
<br />
<br />
      
      <div class="card mb-3" onLoad={this.refreshDefect}>
        <div class="card-header">
         <h3> <b> <i class="fa fa-card"></i> DEFECTS</b></h3>
          <div class="text-right">
            <button type = "submit" class="btn btn-success" data-toggle="modal" onClick={this.routeAddDefect}><i class="fa fa-plus"></i>
              Add New Defect</button>
          </div>
        </div>

        <div class="return_msg" id="return_msg">
        </div>


        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>NO.</th>
                  <th>DEFECT ID</th>
                  <th>NAME</th>
                  <th>DISCRIPTION</th>
                  <th>PRIORITY</th>
                  <th>SEVERITY</th>
                  <th>PROJECT NAME</th>
                  <th>EDIT </th>
                <th>DELETE</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                <th>NO.</th>
                  <th>DEFECT ID</th>
                  <th>NAME</th>
                  <th>DISCRIPTION</th>
                  <th>PRIORITY</th>
                  <th>SEVERITY</th>
                  <th>PROJECT NAME</th>
                  <th>EDIT </th>
                <th>DELETE</th>
                </tr>
              </tfoot>
              <tbody>
              {this.state.defects.map((defect, index) => (
               
                <tr key={defect.id}>
                  <td>{index+1}</td>
                  <td>{defect.id}</td>
                  <td>{defect.defect_name}</td>
                  <td>{defect.defect_description}</td>
                  <td>{defect.priority }</td>
                  <td>{defect.severity }</td>
                  <td>{defect.project.project_name}</td>
                  <td>
                    <button className="btn btn-primary" type="submit">
                      <i
                        className="fa fa-edit"
                        onClick={() => this.routeEditDefect(defect.id)}
                      >
                        Edit
                      </i>
                    </button>
                  </td>
                  <td>
                  <button
                      className="btn btn-danger"
                      onClick={() =>
                        window.confirm(
                          "Are you sure you wish to delete this Employee? "
                        ) && this.deleteDefect(defect.id)
                      }
                    >
                      <i className="fa fa-trash"> Delete</i>
                    </button>
                    </td>
                </tr>
              ))}

              </tbody>
            </table>
          </div>
        </div>
        <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
      </div>


      </div>
      <div className="col-sm-2" > </div>
      </div>
      
    )
  }
}
export default ListDefect;
