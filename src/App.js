import './App.css';
import {useState, useEffect, createContext, useContext} from 'react'

function App() {
  // Progression: 1
  const [age_1, setAge_1] = useState(19);
  const handleClick_1 = () => setAge_1(age_1+1)
  
  // Progression: 2
  const [age_2, setAge_2] = useState(19);
  const [siblingsNum_2, setSiblingsNum_2] = useState(10);
  const handleClick_2 = () => setAge_2(age_2+1)
  const handleSiblingsNum_2 = ()=>{
    setSiblingsNum_2(siblingsNum_2+1)
  }
  // Progression: 3
  const [state, setState] = useState({age: 19,
  siblingsNum: 10})

    const handleClick_3 = val => {
      setState({
        ...state,
        [val]: state[val]+1
      })
    }
    // const {age_3, siblingsNum_3} = state
  
  // Progression: 4
  const [count, setCount]= useState(0);

  // Progression: 5
  const [age_5, setAge_5] = useState(0);
  const handleClick_5 = () => setAge_5(age_5+1);
  useEffect(()=>{
    document.title = 'You are '+age_5+' years old!'
  })

  // Progression: 6
  const themes = {
    dark: {
      background: "#D995A2",
      foreground: "#FCEFD8"
    },
    light: {
      background: "#FCEFD8",
      foreground: "#D995A2"
    }
  };
  const ThemeContext = createContext(themes.light);
  const [themesStyle, setThemeStyle] = useState(themes.dark)
  var handleThemeStyles = ()=>{
    setThemeStyle(themesStyle === themes.dark?themes.light:themes.dark)
  }
  var ThemeButton = ()=>{
    const theme = useContext(ThemeContext);
    return (
      <div style={{background: theme.background, color:theme.foreground}}>
        THEME IS CHANGING
      </div>
    )
  }
  
  return (
  <div>
    <h1>Progression: 1</h1>
    <hr/>
    <h2>Today I'm {age_1} years of age.</h2>
    <div>
      <button onClick={handleClick_1}>Get older!</button>
    </div>

    <h1>Progression: 2</h1>
    <hr/>
    <h2>Today I'm {age_2} years of age.</h2>
    <h3>I have {siblingsNum_2} siblings</h3>
    <div>
      <button onClick={handleClick_2}>Get older!</button>
      <button onClick={handleSiblingsNum_2}>More siblings</button>
    
    </div>

    <h1>Progression: 3</h1>
    <hr/>
    <h2>Today I'm {state.age} years of age.</h2>
    <h3>I have {state.siblingsNum} siblings</h3>
    <div>
      <button onClick={()=>handleClick_3(state.age)}>Get older!</button>
      <button onClick={()=>handleClick_3(state.siblingsNum)}>More siblings</button>
    
    </div>

    <h1>Progression: 4</h1>
    <hr/>
    <h3>Count value is: {count}</h3>
    <div>
      <button onClick={()=>setCount(0)}>Reset!</button>
      <button onClick={()=>setCount(count+1)}>Plus(+)</button>
      <button onClick={()=>setCount(count-1)}>Minus(-)</button>
    
    </div>

    <h1>Progression: 5</h1>
    <hr/>
    <h3>You are {age_5} years old.</h3>
    <div>
      <button onClick={handleClick_5}>Update Title</button>
    </div>

    <h1>Progression: 6</h1>
    <hr/>
    <ThemeContext.Provider value={themesStyle}>
    <ThemeButton></ThemeButton>
    <h3>You are {age_5} years old.</h3>
    <div>
      <button onClick={handleThemeStyles}>Change Theme</button>
    </div>
    </ThemeContext.Provider>
    
  </div>
  );
}

export default App;
