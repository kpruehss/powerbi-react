import React, {Component} from 'react';
import Report from './components/Report';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="embedContainer">
          <Report />
        </div>
      </div>
    );
  }
}

export default App;
