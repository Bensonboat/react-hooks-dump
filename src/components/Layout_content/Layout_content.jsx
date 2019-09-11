import React, { useState, useEffect } from 'react';
import axios from 'axios'

// class LayoutContent extends React.Component{
//     render(){
//         return(
//         <div style={{padding: 24, background: '#fff', minHeight: 360}}>{this.props.content}</div>
//         // <div style={{padding: 24, background: '#fff', minHeight: 360}}>9999</div>
//         )
//     }
// }

function LayoutContent() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState('1')

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  function getAPIData() {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(function (response) {
        // handle success
        let data = response.data;
        console.log(data)

        setTodo(data.title);

        console.log(todo, '1')
      })
    // setTodo('123')

  }

  console.log(todo, '2')
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <button onClick={getAPIData}>Get Data</button>
      <div>now todo is {todo} </div>
      {/* <div>{todo.map((value, index) => value.title)}</div> */}
    </div>
  );
}

export default LayoutContent