import React, { Component } from 'react';
import Main from './Main'
import Audio from './components/Audio'


class App extends Component {

  render() {
    return (
      <div>
        <Audio />
        <Main />
      </div>
    );
  }
}

export default App;
