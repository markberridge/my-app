import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// ###########
// ### App ###
// ###########
class App extends Component {
  render() {
    return (
        <div id="main">
            <Header />
            <Welcome />
            <Footer />
        </div>
    );
  }
}


// ##############
// ### Header ###
// ##############
const h1List = ['Summary', 'Activities', 'Segments'].map((h1) =>
    <li>{h1}</li>
);
class Header extends Component {
    render() {
        return (
            <ul>{h1List}</ul>
        );
    }
}

// ###############
// ### Welcome ###
// ###############
const name = 'Bob';
class Welcome extends Component {
    render() {
        return (
            <h3>Hello, {name}</h3>
        );
    }
}

// ##############
// ### Footer ###
// ##############
class Footer extends Component {
    render() {
        return (
            <div>This is the footer</div>
        );
    }
}

export default App;
