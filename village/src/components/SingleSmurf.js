import React from "react";
import axios from "axios";
import styled from "styled-components";

class SingleSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.getSmurf(id);
  }

  getSmurf = id => {
    axios
      .get(`http://localhost:3333/smurfs/`)
      .then(res => {
        this.setState({
          smurf: res.data[id]
        });
        console.log(res.data[id]);
        console.log(this.state.smurf);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    if (this.state.smurf) {
      return (
        <SmurfDiv className="Smurf">
          <h3>{this.state.smurf.name}</h3>
          <strong>{this.state.smurf.height} tall</strong>
          <p>{this.state.smurf.age} smurf years old</p>
          {/* <Button onClick={deleteSmurf}>Kill Smurf</Button> */}
        </SmurfDiv>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default SingleSmurf;

const SmurfDiv = styled.div`
  margin: 0 auto;
`;

const Button = styled.button`
  background: #88ccff;
  color: white;

  padding: 10px;
  border-radius: 15px;

  &:hover {
    background: orangered;
    color: #88ccff;
  }
`;
