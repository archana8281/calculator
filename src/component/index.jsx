import { useState } from "react";
export default function Calc() {

  const [data, setData] = useState({ val: '', res: '' });

  const cal = (event) => {
    const show = data.val + event.target.value;
    setData({ val: show, res: "" });
    console.log(show);
  }
  const result = () => {
    try {
      if (data.val !== "") {
        const out = eval(data.val)
        setData({ val: '', res: out })
        console.log(out);
      }
    } catch (error) {
      setData({ val: '', res: "ERR" })
      console.log(error);
    }
  }
  const cleardisplay=()=>{
  setData({val: "" ,res : " "})
  }
  return (
    <>
      <br /><br />
      <input type="text" placeholder={"0"} value={data.res === "" ? data.val : data.res} id="inp" readOnly />
      <br /><br />
      {/* <button onClick={cal} className="button" value={'+'}>+</button>
      <button onClick={cal} className="button" value={'-'}>-</button>
      <button onClick={cal} className="button" value={'*'}>x</button>
      <button onClick={cal} className="button" value={'/'}>/</button>
      <button onClick={result} className="button" value={'='}>=</button>
      <br />
      <button onClick={cal} className="btn" value={7}>7</button> <button onClick={cal} className="btn" value={8}>8</button>
      <button onClick={cal} className="btn" value={9}>9</button><br />
      <button onClick={cal} className="btn" value={4}>4</button> <button onClick={cal} className="btn" value={5}>5</button>
      <button onClick={cal} className="btn" value={6}>6</button><br />
      <button onClick={cal} className="btn" value={1}>1</button> <button onClick={cal} className="btn" value={2}>2</button>
      <button onClick={cal} className="btn" value={3}>3</button><br />
      <button onClick={cal} className="btn" value={0}>0</button>  <button onClick={cleardisplay} className="btn">C</button> */}
    </>
  );
}