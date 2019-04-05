import React from "react";
import styled from "styled-components";

const Smurf = props => {
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
  };

  return (
    <SmurfDiv className="Smurf">
      <h3>{props.name}</h3>
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
