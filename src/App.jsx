
// useState实现计数器按钮
import { useState } from 'react'


function App() {

  // 1.调用useState添加状态变量
  const [form, setForm] = useState({
    name: "jack"
  })

  // 2.点击事件回调
  const handleClick = () => {
    setForm({ ...form, name: "mike" })
  }

  return (
    <div className="App">
      <button onClick={handleClick}>{form.name}</button>
    </div>
  )
}

export default App