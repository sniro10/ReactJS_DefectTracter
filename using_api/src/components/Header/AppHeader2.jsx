import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Formik, Form, Field } from "formik";
import { Button} from 'react-bootstrap';
import { Navbar} from 'react-bootstrap';
import { Nav} from 'react-bootstrap';
import { FormControl} from 'react-bootstrap';
class AppHeader2 extends Component {
  constructor(props) {
    super(props);
    this.routeListProject = this.routeListProject.bind(this);
  }
   //Navigate FUNCTION TO Project lIST
   routeListProject() {
    let path = `/projects`;
    this.props.history.push(path);
  }
    render() {
        return (
            <div>
               
             
  
  <br></br>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/">DEFECT TRACKER</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/projects">Projects </Nav.Link>
      <Nav.Link href="/employees">Employees</Nav.Link>
      <Nav.Link href="/defects">Defects</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    
    </Form>
  </Navbar>



  

            </div>
        )
    }
}
export default AppHeader2;