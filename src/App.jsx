
// useState实现计数器按钮
import { useState } from 'react'


function App() {

  // 1.调用useState添加状态变量
  const [count, setMyCount] = useState(0)

  // 2.点击事件回调
  const handleClick = () => {
    setMyCount(count + 1)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App