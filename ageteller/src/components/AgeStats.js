import React, { Component } from 'react';
import partyPopper from '../assets/party-popper.jpg';

export default class AgeStats extends Component {

  timeSince(date) {
    let today = new Date().getTime();
    let otherDate = new Date(date).getTime();
    let difference = Math.abs(today - otherDate);

    let days = Math.floor(difference / (1000*3600*24));
    let years = Math.floor(days/365);
    days -= (years*365);
    let months = Math.floor(days/30);
    days -= (months * 30);


    return `${years} years, ${months} months and ${days}  days`;
  }

  render() {
    return(
      <div>
        <h3>
          {this.props.date}
        </h3>
        <h4>
          Congrats on {this.timeSince(this.props.date)}!
        </h4>
        <img src= {partyPopper} alt= "party-popper" className= "party-popper" />
      </div>
    )
  }
}