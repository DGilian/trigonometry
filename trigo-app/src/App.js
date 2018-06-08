import React, { Component } from 'react';
import './App.css';
import InputCoo from './InputCoo'
import algo from './Algo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xA: 1,
      yA: 11,
      xB: 2,
      yB: 15,
      xC: 8,
      yC: 20
    }
  }

  render() {

    let result = algo(this.state.xA, this.state.yA, this.state.xB, this.state.yB, this.state.xC, this.state.yC)
    const tab = ['A', 'B', 'C']

    return (
      <div className="App">
        <header className="App-header">
          <p className="App-intro">
            Angle calc !
          </p>
        </header>
        <main>
          <form>

            {tab.map((letter) => (
              <InputCoo point={letter} />
            ))}
            <button>Valider</button>
          </form>
          <p>Angle ABC = {result}</p>
        </main>

      </div >
    );
  }
}

export default App;

