import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Smurf = props => {
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  };

  return (
    <SmurfDiv className="Smurf">
      <Link to={`/smurf/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <Button onClick={deleteSmurf}>Kill Smurf</Button>
    </SmurfDiv>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

const SmurfDiv = styled.div`
  width: 25%;
  margin: 0 auto 10px;
  padding-bottom: 20px;

  border: 2px dotted #88ccff;
`;

const Button = styled.button`
  background: #88ccff;
  color: white;

  padding: 10px;
  border-radius: 15px;

  &:hover {
    background: orangered;
    color: white;
  }
`;
