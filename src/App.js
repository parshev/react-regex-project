import React, { Component } from "react";
import "./style.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      course: 2
    };
  }
  setChangeValue = e => {
    var temp = e.target.value;
    if (Number.isInteger(temp)) {
      this.setState({
        course: temp
      });
    } else if (!Number.isInteger(temp) && temp != null) {
      var tempFloat = temp.replace(",", ".");
      this.setState({
        course: tempFloat
      });
    } else {
      if (temp === NULL) {
        console.log(temp);
      }
    }
  };
  setText = e => {
    this.setState({
      text: e.target.value
    });
  };
  convert = () => {
    const { text } = this.state;
    var rx = /\$\d*[\.?\,?]?\d+/g;
    const arr = text.split(" ");
    arr.forEach((element, i) => {
      if (element.match(rx)) {
        rx.test(element);
        var begin = element.search(rx);
        var end = rx.lastIndex;
        var chars = element.substr(0,begin);
        console.log(chars)
        var val = element.substr(begin, end);
        var intVal = (
          parseFloat(val.replace("$", "").replace(",", ".")) *
          (this.state.course )
        ).toFixed(2);
        arr[i] = `${chars}`+intVal + " лв.";
      }
      var supstr = arr.join(" ");
      this.setState({
        text: supstr
      });
    });
  };
  render() {
    return (
      <div className="main-container">
        
        <textarea
          rows="5"
          cols="25"
          onChange={this.setText}
          value={this.state.text}
        />
        <label>
          курс за деня <input type="text" onChange={this.setChangeValue} />
        </label>
        <div className="button-div" onClick={this.convert}>
          convert
        </div>
      </div>
    );
  }
}
