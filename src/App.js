import React from 'react';
import './App.css';

import Weather from "./Components/Weather";
import News from "./Components/News";
import ToDo from "./Components/ToDo";

function App() {
  return (
    <main>
      <h1>Greetings, Sneha</h1>
      <Weather/>
      <section>
        <div>
          <h3>Latest headlines</h3>
          <News/>
        </div>
        <div>
          <h3>Today's Agenda</h3>
          <ToDo/>
        </div>
      </section>
    </main>
  );
}

export default App;
