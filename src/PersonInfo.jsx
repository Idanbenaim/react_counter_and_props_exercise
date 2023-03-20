import React from 'react';

const PersonInfo = (props) => {
  const { name, age, occupation } = props.person;

  return (
    <div>
      <p>Name: {name} <br />
      Age: {age}<br />
      Occupation: {occupation}</p>
    </div>
  );
};

export default PersonInfo;
