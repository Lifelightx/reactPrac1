import {useState} from 'react'

import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('white');
  const [color, setColor] = useState('black');
  const [btnBgColor, setBtnBgColor] = useState('#222');
  const [enable, setEnable] = useState('Enable dark Mode')
  const changeMode = ()=>{
    if(bgColor !== '#222'){
      setBgColor('#222');
      setEnable('Enable light mode');
      setColor('white')
      setBtnBgColor('white')
    }
    else{
      setBgColor('white')
      setEnable('Enable dark mode');
      setColor('black')
      setBtnBgColor('#222')
    }
  }
  const style = {
    backgroundColor: btnBgColor

  }
  return (
    <>
      <div id='container' style={{backgroundColor:bgColor, color:color}}>
        <h3>Mode Changer</h3>
        <button style={style} id='btn' onClick={changeMode}>{enable}</button>
      </div>
    </>
  );
}

export default App;
