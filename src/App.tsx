import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Label, Input } from "../";
import { Image } from "../lib/main";
// import {Example} from '../lib/components/Example'

function App() {
  const [count, setCount] = useState(0);
  const [inputCustomCountValue, setInputCustomCountValue] = useState("");

  const handleClickCustomCount = () => {
    if (inputCustomCountValue === "") {
      setCount((count) => count + 1);
    } else {
      setCount(Number(inputCustomCountValue));
    }
  };

  return (
    <>
      <div>
        <a rel="noopener" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a rel="noopener" href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Image
          id={"cf-123"}
          component="image"
          imageurl="https://cfstock.s3.amazonaws.com/components/image/placeholder.jpg"
        />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
