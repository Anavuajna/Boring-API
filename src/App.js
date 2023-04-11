import { useEffect, useState, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import './App.css';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);


function App() {

  const [boring, setBoring] = useState('');

  const fetchData = async () => {
    const response = await fetch('http://www.boredapi.com/api/activity/');
    const data = await response.json();
    console.log(response, data)
    setBoring(data.activity)
  };

  useEffect(() => {
        fetchData()
  }, [])

  useLayoutEffect(() => {
     gsap.context(() => {
      gsap.to('.heading', {text: 'Не знаешь, чем заняться?', duration: 3.5,  ease: 'power1.inOut'});
      gsap.from('.boring', {opacity: 0, duration: 2, delay: 2});
    });
  }, []);

  return (
    <div className="App">
      <h1 className='heading'> </h1>
      <h2 className='boring'>{boring}</h2>
      <button onClick={fetchData}>Жми на конпку</button>
    </div>
  );
}

export default App;
