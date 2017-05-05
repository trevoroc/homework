import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
      num1: "",
      num2: ""
    };

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  setNum1(e) {
    const newNum1 = document.getElementById("num1");
    this.setState({ num1: newNum1.value });
  }

  setNum2(e) {
    const newNum2 = document.getElementById("num2");
    this.setState({ num2: newNum2.value });
  }

  render() {
    console.log(this.state);
    return (
      <section>
        <input onChange={this.setNum1} id="num1"
         type="text" value={this.state.num1}/>
        <input onChange={this.setNum2} id="num2"
         type="text" value={this.state.num2}/>
        <br/>
        <h1>{this.state.result}</h1>
      </section>
    );
  }
}

export default Calculator;
