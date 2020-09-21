import React, { Component } from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import AgeStats from './AgeStats';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newDate : '',
      birthday : '1993-10-14',
      showStats : false
    }
  }

  changeBirthday() {
    console.log(this.state);
    this.setState({
      birthday : this.state.newDate,
      showStats : true
    })
  }

  render() {
    return (
      <div className= "App">
        <Form inline>
          <h2>Input your Birthday!</h2>
          <FormControl type= "date" onChange= {event => this.setState({ newDate: event.target.value })} ></FormControl>
          {' '}
          <Button onClick= {() => this.changeBirthday()} >Submit</Button>
        </Form>
        {
          this.state.showStats 
            ?
              <div className="fade age-stats">
                <AgeStats date={this.state.birthday} />
              </div>
            :
              <div />
        }
      </div>
    )
  }
}

export default App;
