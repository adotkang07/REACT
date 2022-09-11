import './App.css';
import UpdateEffectHookDemoComponent from "./Components/updateEffectHook/UpdateEffectHookDemoComponent"
import ToggleDemoComponent from "./Components/toggleHook/ToggleDemoComponent"
import ArrayDemoComponent from "./Components/arrayHook/ArrayDemoComponent";

function App() {
  return (
    <div className="App">
      <ToggleDemoComponent></ToggleDemoComponent>
      <ArrayDemoComponent></ArrayDemoComponent>
      <UpdateEffectHookDemoComponent></UpdateEffectHookDemoComponent>
    </div>
  );
}

export default App;
