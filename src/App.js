import EffectDOM from "./Hook_Function/Effect_DOM.js";
import { useState } from "react";

function App() {
   const [show, setShow] = useState(false);
   return (
      <div className="App" style={{ padding: 100 }}>
         <button onClick={() => setShow(!show)}>Nav</button>
         {show && <EffectDOM />}
      </div>
   );
}

export default App;
