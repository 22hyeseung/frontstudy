import * as React from 'react';
import Hello from './components/Hello';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Hello name="Huusz" enthusiasmLevel={10} />
      </div>
    );
  }
}

export default App;
