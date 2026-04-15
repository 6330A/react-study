import { useRef, useState } from 'react'

function App() {

  // 1. useRef 生成ref对象， 绑定到dom标签上
  // 2. 通过ref对象.current获取dom元素
  const inputRef = useRef(null)
  const showDom = () => {
    console.dir(inputRef.current)
  }
  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <button onClick={showDom}>click me</button>
    </div>
  )
}

export default App