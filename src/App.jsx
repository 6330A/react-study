import { useState } from 'react'

function Son(props){

  const sonMsg = 'son msg'
  return <button onClick={() => props.getMsg(sonMsg)}>click</button>
}

function App() {

  const [msg, setMsg] = useState('')
  const getMsg = (msg) => {
    console.log(msg)
    setMsg(msg)
  }

  return (
    <div>
      <p>app:{msg}</p>
      <Son getMsg={getMsg}/>
    </div>
  )
}

export default App