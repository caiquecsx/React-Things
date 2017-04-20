import React from 'react';
import ReactDOM from 'react-dom';

//Creating components

// class App extends React.Component {
//   render(){
//     return React.createElement('h1', null, 'Hello !')
//   }
// }

// const App = () => <h1>Hello Stateless</h1>


//Mutiple components
class App extends React.Component {
  render(){
    return <div>
        <h1>Hello !</h1>
        <b>Bold</b>
      </div>
  }
}

export default App
