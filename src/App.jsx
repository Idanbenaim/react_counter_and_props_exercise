import './App.css';
import Message from './Third';
import Counter from './Counter2';
import Counter3 from './Counter3';
import About from './About';
import ThirdProps from './ThirdProps';
import PersonInfo from './PersonInfo';


function App() {  
    // related to ThirdProps
    let numLst = [1,2,3,4,5,6,7,8,9,10]
    
    // related to PersonInfo
    const person = {
      name: 'Idan',
      age: 43,
      occupation: 'Software Developer',
    };

    return (
        <div>
            <Message />
            <Counter />
            <Counter3 />
            <About userName='Idan' />
            <ThirdProps numbers={numLst} />
            <PersonInfo person={person} />
        </div>
  )
  // const hello = () => {
  //   return "hello world"
  // }
  // const lst = [1,2,3,4,5,6]
  // const sumEvenNumbers = (l) => {
  //   let sum = 0;
  //   for (let i = 0; i < l.length; i++) {
  //     if (l[i] % 2 === 0) {
  //       sum += l[i];
  //     }
  //   }
  //   return sum;
  // };

  // return (
  //   <div>
  //     {hello()}<br />
  //     {'even numbers sum is: '}{sumEvenNumbers(lst)}
  //   </div>
  // );

}

export default App;
