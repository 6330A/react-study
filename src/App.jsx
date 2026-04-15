import { useState } from 'react'

function A({getAName}) {

  return (
    <div>
      <p>组件A</p>
      <button onClick={() => getAName('组件A张三')}>获取组件A的名字</button>
    </div>
  )
}

function B({name}) {

  return (
    <div>
      <p>组件B</p>
      <p>组件A的名字是：{name}</p>
    </div>
  )
}

function App() {

  const [name, setName] = useState('')

  const getAName = (name) => {
    console.log(name)
    setName(name)
  }

  return (
    <div>
      <A getAName={getAName}/>
      <B name={name} />
    </div>
  )
}

export default App