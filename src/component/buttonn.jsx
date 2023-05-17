import React from 'react'

function Buttonn(props) {
  return (
    <div >
       <button onClick={props.fun} className="btn" value={props.Value} >{props.Label}</button>
    </div>
  )
}

export default Buttonn