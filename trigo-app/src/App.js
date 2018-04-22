import React, { Component } from 'react';
import './App.css';
import InputCoo from './InputCoo'
import calcul from './Algo'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let stock = calcul()

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

            {tab.map((value) => (
              <InputCoo point={value} />
            ))}

          </form>
        </main>

      </div >
    );
  }
}

export default App;

