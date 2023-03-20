function Sec() {
    const hello = () => {
      return "hello world"
    }
    const lst = [1,2,3,4,5,6]
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
        {hello()}<br />
        {'even numbers sum is: '}{sumEvenNumbers(lst)}
      </div>
    );
  }