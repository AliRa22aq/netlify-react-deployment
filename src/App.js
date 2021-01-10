import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

  const [val, setVal] = useState({});

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
    .then(res => res.json())
    .then(obj => setVal(obj))

  }, [])
  
  return (
    <div className="App">
        {val.message}
    </div>
  );
}

export default App;
