import React from 'react';
import { observer } from 'mobx-react';
import './App.css'
import Login from './components/login/Login';



const App = observer(() => {
  return (
    <div className="App">
      <Login />
    </div>
  );
})

export default App;
