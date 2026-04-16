import { useEffect, useState } from 'react'
const URL = 'http://geek.itheima.net/v1_0/channels'
function App() {
  // 创建一个状态数据
  const [list, setList] = useState([])
  useEffect(() => {
    async function getList() {
      const res = await fetch(URL)
      const jsonRes = await res.json()
      console.log(jsonRes)
      setList(jsonRes.data.channels)
    }
    getList()
  }, [])
  // 通过val属性绑定react状态
  // 绑定onChange事件，通过事件参数e拿到输入框最新的值，反向修改到react状态
  return (
    <div>
      this is app
      <ul>
        {list.map(item => <li key = {item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}
export default App