import React from 'react';
import GreetFunction from './components/01components/GreetFunction';
import GreetClass from './components/01components/GreetClass';
import JsxReactCreateElement from './components/01components/JsxReactCreateElement';
import FunctionalProps from './components/02props/FunctionalProps';
import ClassProps from './components/02props/ClassPros';
import StateComponent from './components/03state/StateComponent';
import CounterState from './components/03state/CounterState';
import DestructureFunction from './components/04Destructuring/DestructureFunction';
import DestructureClass from './components/04Destructuring/DestructureClass';
import FunctionalEventHandle from './components/05EventHandle/FunctionalEventHandle';
import ClassEventHandle from './components/05EventHandle/ClassEventHandle';
import ParentClassCopm from './components/06Method-as-props/ParentClassComp'

function App() {
  return (
    <div className="App">
      <h1>HelloWorld</h1>
      <GreetFunction />
      <GreetClass />
      <JsxReactCreateElement />

      {/* props */}
      <FunctionalProps name='Clark' codeName='superman' rank = '01' />
      {/* props have children props */}
      <FunctionalProps name='Bruce' codeName='Batman' rank = '02' >
        <h2>Dark Knight</h2>
      </FunctionalProps>
      <FunctionalProps name='Diana' codeName='Wonderwomen' rank = '03'>
        <button>Godess</button>
      </FunctionalProps>

      <ClassProps  name='Barry' codeName='Flash' rank='04'>
        <h2>FlashPoint</h2>
      </ClassProps>
      <ClassProps name='Jordan' codeName='GreenLantern' rank='05'>
        <h2>Will of Power</h2>
      </ClassProps>
      
      {/* state */}
      <StateComponent/>
      <CounterState/>

      {/* Destructure */}
      <DestructureFunction name='John' codeName='Martian' rank='06' />
      <DestructureClass  name='wally' codeName='Kid-Flash' rank='44' />
      
      {/* EventHandle */}
      <FunctionalEventHandle />
      <ClassEventHandle />

      {/* method-as-props */}
      <ParentClassCopm />

    </div>
  );
}

export default App;
