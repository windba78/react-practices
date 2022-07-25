import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  render() {
    return (
      <div className="clock-display">
        <h2>ex05 - Component LifeCycle Practice</h2>
        <Clock
          hours={
            this.state.date.getHours() > 12
              ? this.state.date.getHours() - 12
              : this.state.date.getHours()
          }
          minutes={
            this.state.date.getMinutes() < 10
              ? "0" + this.state.date.getMinutes()
              : this.state.date.getMinutes()
          }
          seconds={
            this.state.date.getSeconds() < 10
              ? "0" + this.state.date.getSeconds()
              : this.state.date.getSeconds()
          }
          session={this.state.date.getHours() > 12 ? "pm" : "am"}
        />
      </div>
    );
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
}
