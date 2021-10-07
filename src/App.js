import './App.css';
import DataTypeSelector from './components/datatype/datatype.component';
import DisplayGraphs from './pages/displaygraphs/displaygraphs.component';
import React from 'react';


class App extends React.Component {

  render(){

    return (
        <div>
          <DataTypeSelector />
          <DisplayGraphs c1Name={"Data"} c2Name={"Density"}/>
        </div>
    )
  }
}

export default App;


