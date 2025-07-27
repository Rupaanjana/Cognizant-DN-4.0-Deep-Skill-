import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div>
      <CohortDetails name="React Bootcamp" startDate="01-Jul-2025" endDate="15-Aug-2025" status="ongoing" />
      <CohortDetails name="Java Sprint" startDate="10-May-2025" endDate="25-Jun-2025" status="completed" />
    </div>
  );
}

export default App;
