import React, { useReducer } from 'react'
import Navbar from './Components/Navbar';
import {initialState} from './Components/reducer/reducer';
import reducer from './Components/reducer/reducer';
export const Context = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state.posts);
  return (
    <Context.Provider value={{state, dispatch}}>
      <Navbar/>       
    </Context.Provider>    
  );
}

export default App;
