import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Rupanjana Batabyal" school="KIIT University" total={475} goal={5} />
    </div>
  );
}

export default App;
