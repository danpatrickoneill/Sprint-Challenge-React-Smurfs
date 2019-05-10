import React, { Component } from "react";
import styled from "styled-components";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    if (this.state.name && this.state.age && this.state.height) {
      const newSmurf = {
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
      };
      this.props.addSmurf(newSmurf);
      this.props.history.push("/");

      // Reset form and state
      event.target.reset();
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    } else {
      alert("Please complete form before submission");
    }
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <Input
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="name"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="age"
          />
          <Input
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="height"
          />
          <SmurfButton type="submit">Add to the village</SmurfButton>
        </form>
      </div>
    );
  }
}

export default SmurfForm;

const Input = styled.input`
  padding-left: 5px;
  margin-right: 10px;
  line-height: 1.5;
`;

const SmurfButton = styled.button`
  background: #88ccff;
  color: white;

  padding: 10px;
  border-radius: 15px;

  &:hover {
    background: white;
    color: #88ccff;
  }
`;
