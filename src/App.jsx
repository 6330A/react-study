import { useRef, useState } from 'react'

function App() {

  const [val, setValue] = useState('')

  // 通过val属性绑定react状态
  // 绑定onChange事件，通过事件参数e拿到输入框最新的值，反向修改到react状态
  return (
    <div>
      <input value={val} onChange={(e) => setValue(e.target.value)} type='text'></input>
    </div>
  )
}

export default App