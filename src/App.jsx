import "./App.css";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
function App() {
  console.log("HIHI");
  return (
    <div className="App ">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
