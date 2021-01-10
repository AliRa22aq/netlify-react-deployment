import React, {useEffect, useState} from 'react';
import './App.css';


function App() {

  const [val, setVal] = useState({});
  const [val2, setVal2] = useState({});

  useEffect(() => {
    fetch(`/.netlify/functions/hello?name=from Serverless Function`)
    .then(res => res.json())
    .then(obj => setVal(obj))

  }, []);

  useEffect(() => {
    fetch(`/.netlify/functions/ali?name=is going to be a Millionaire`)
    .then(res => res.json())
    .then(obj => setVal2(obj))

  }, [])
  
  return (
    <div className="App">
        {val.message} <br />
        {val2.message}
    </div>
  );
}

export default App;
