import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="divver">
        <div className="cl1">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
        <div className="cl2">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
         <div className="cl3">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
         <div className="cl4">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
         <div className="cl5">
          <Hello name={this.state.name} />
          <p>
            Start editing to see some magic happen :)
          </p>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
