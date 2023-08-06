import React, { createContext } from 'react';
import './App.css';
import State from './State';
import Reducer from './Reducer';
import Effect from './Effect';
import LayoutEffect from './LayoutEffect';
import Ref from './Ref';
import ChildA from './ChildA';

const data = createContext();
const data1 = createContext();
function App() {
  const Name = "Kiran Madiwalar";
  const Age = 22;
  return (
    <div className="App">
    {/* <State /> */}
    {/* <Reducer/> */}
    {/* <Effect/> */}
    {/* <LayoutEffect /> */}
    {/* <Ref/> */}

    {/* context api */}

<data.Provider value={Name}>
  <data1.Provider value={Age}>
    <ChildA/>
    </data1.Provider>
    </data.Provider>
    </div>
  );
}

export default App;
export {data, data1};
