import { useLayoutEffect, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [a, setA] = useState(1);
  const [b, setB] = useState("1");

  console.log("%c render!!", "color: red");

  useEffect(() => {
    console.log("use effect1: ", a);
  }, [a]);

  useLayoutEffect(() => {
    console.log("use layout effect1: ", a);
  }, [a]);

  useEffect(() => {
    console.log("use effect2: ", a);
  }, [a]);

  useLayoutEffect(() => {
    console.log("use layout effect2: ", a);
  }, [a]);

  // effect b

  useLayoutEffect(() => {
    console.log("use layout effect0: ", b);
  }, [b]);

  useEffect(() => {
    console.log("set b");
    setB(b + "0");
  }, [a]);

  useLayoutEffect(() => {
    console.log("listen a, console b", b);
  }, [a]);

  useEffect(() => {
    console.log("use effect1: ", b);
  }, [b]);

  useLayoutEffect(() => {
    console.log("use layout effect1: ", b);
  }, [b]);

  useEffect(() => {
    console.log("use effect2: ", b);
  }, [b]);

  useLayoutEffect(() => {
    console.log("use layout effect2: ", b);
  }, [b]);

  const ccc = 12;

  return (
    <div className="App">
      <button onClick={() => setA(a + 1)}>A button</button>
      <button onClick={() => setB(b + "0")}>B button</button>
    </div>
  );
}
