import React from 'react';

const ThirdProps = (props) => {
  const lst = props.numbers;
  
  const sumEvenNumbers = (l) => {
    let sum = 0;
    for (let i = 0; i < l.length; i++) {
      if (l[i] % 2 === 0) {
        sum += l[i];
      }
    }
    return sum;
  };

  return (
    <div>
      even numbers sum is: {sumEvenNumbers(lst)}
    </div>
  );
};

export default ThirdProps;
