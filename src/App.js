import React, {Component} from 'react';
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

class App extends Component {
  render() {
    return (
      <div id="main">
        <Header/>
        <Welcome name="Mark"/>
        <Footer/>
      </div>
    );
  }
}


class TokenForm extends Component {

  constructor(props) {
    super(props);
    this.state = {token: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({token: event.target.value});
  }

  handleSubmit(event) {
    alert('Submit clicked, token=' + this.state.token);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="token">Token:</label>
          <input type="text" name="token" value={this.state.token} onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}


class Menu extends Component {

  // constructor(props) {
  //   super(props)
  //   const {
  //     name
  //   } = props;
  // }

  render() {
    return (
      <div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
    );
  }
}

class Header extends Component {

  render() {
    return (
      <div>
        <TokenForm/>
        <Menu/>
      </div>
    );
  }
}


class Welcome extends Component {
  render() {
    return (
      <h3>Hello, {this.props.name}</h3>
    );
  }
}


class Footer extends Component {
  render() {
    return (
      <div>This is a footer. <Clock/></div>
    );
  }
}


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <span>{this.state.date.toLocaleTimeString()}</span>
    );
  }
}

export default App;
