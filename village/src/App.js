import React, { Component } from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  componentDidMount() {
    this.getSmurfs();
  }

  getSmurfs = () => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfH1>Smurf Village</SmurfH1>
        <NavBar>
          <NavLink exact to="/">
            <button>Smurfs</button>
          </NavLink>
          <NavLink to="/smurf-form">
            <button>Smurf Smurf</button>
          </NavLink>
        </NavBar>
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} addSmurf={this.addSmurf} />}
        />

        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

const SmurfH1 = styled.h1`
  color: #88ccff;
  font-size: 54px;
`;

const NavBar = styled.nav`
  margin: 0 auto;
  width: 50%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;

  button {
    background: #88ccff;
    color: white;

    font-size: 24px;
    padding: 10px;
    border-radius: 15px;

    &:hover {
      background: white;
      color: #88ccff;
    }
  }
`;
