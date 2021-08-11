import { render } from '@testing-library/react';
import './App.css';
import DemoGraph from './components/demograph/demo-graph.component';
import DemoDensity from './components/demograph/demo-density.component';

const App = () => (
    <div>
      <DemoGraph />
      <DemoDensity />
    </div>
   );


export default App;
