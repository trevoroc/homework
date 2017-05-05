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
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.reset = this.reset.bind(this);
  }

  setNum1(e) {
    const newNum1 = document.getElementById("num1");
    this.setState({ num1: newNum1.value });
  }

  setNum2(e) {
    const newNum2 = document.getElementById("num2");
    this.setState({ num2: newNum2.value });
  }

  coerce(numString) {
    return numString === "" ? 0: parseInt(numString);
  }

  coerceNums() {
    return [this.coerce(this.state.num1), this.coerce(this.state.num2)];
  }

  add(e) {
    e.preventDefault();

    const nums = this.coerceNums();
    this.setState({ result: nums[0] + nums[1]});
  }

  subtract(e) {
    e.preventDefault();

    const nums = this.coerceNums();
    this.setState({ result: nums[0] - nums[1] });
  }

  multiply(e) {
    e.preventDefault();

    const nums = this.coerceNums();
    this.setState({ result: nums[0] * nums[1] });
  }

  divide(e) {
    e.preventDefault();

    const nums = this.coerceNums();

    if (nums[1] === 0) {
      alert("Don't divide by 0!");
      return;
    }

    this.setState({ result: nums[0] / nums[1] });
  }

  reset(e) {
    e.preventDefault();

    this.setState({ num1: "", num2: "", result: 0 });
  }

  render() {
    return (
      <section>
        <input onChange={this.setNum1} id="num1"
         type="text" value={this.state.num1}/>

        <input onChange={this.setNum2} id="num2"
         type="text" value={this.state.num2}/>

        <br/>

        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>÷</button>

        <br/>

        <h1>{this.state.result}</h1>

        <br/>

        <button onClick={this.reset}>Clear</button>
      </section>
    );
  }
}

export default Calculator;
