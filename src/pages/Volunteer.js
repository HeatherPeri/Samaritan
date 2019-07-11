import React from 'react';
// import Calendar from 'react-calendar';
import axios from 'axios';
// import { Container, Row, Col } from 'reactstrap';
// import { URLSearchParams } from 'url';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


class Volunteer extends React.Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };


  getUsers = () => {
    console.log("sanity check");
    axios
    .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=c9d3a7e3&app_key=a1eab8e3f23bac67609bf0168595f301")
  
        .then(res => {
          console.log(res, "resultss");
        this.setState({
          users: res.data
        });
      })
      .catch(error => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
    <div>
  
      <React.Fragment>
<div>
        <Container>
          <Row>
          <Col size="md-4">

        <h4>Non-Profit List</h4>
        <br></br>
        <div>
          { this.state.users ? (
            this.state.users.map(user => {
              return (
                <h6>
                <div key={user.charityName}>
                  <p>{user.charityName}</p>
                  <p>{user.mailingAddress.city}, {user.mailingAddress.stateOrProvince}</p>

                  <div>
                  <a href={user.charityNavigatorURL} onClick={this.handleClick}>Learn More Here!</a>
                     {/* <p>{user.charityNavigatorURL}</p> */}
                  </div>
                  {/* <p>{user.mailingAddress.city}, {user.mailingAddress.stateOrProvince}</p> */}
                </div>
                <br></br>
                <br></br>
                </h6>
              );
            })
          ) : 
          (
            <p>Loading...</p>
          )}
        </div>

        </Col>
        <Col size="md-4">
          <h3>Event Display Here</h3>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
          <p>
            Event <br></br>
            Location <br></br>
            Time<br></br>
          </p>
            </Col>
        <Col size="md-4">
        
              <div class="fb-page" data-href="https://www.facebook.com/volunteer365/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/volunteer365/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/volunteer365/">Volunteering</a></blockquote></div>
        

        </Col>

        </Row>
        </Container>
        </div>

      </React.Fragment>

      </div>
    );
  }
}

  export default Volunteer;


