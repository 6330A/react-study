import { useState } from 'react'

function Son(props){
  // 3. 子组件通过props接收父组件传递的属性，并使用
  return <div>son, {props.appName}</div>
}

function App() {

  // 1.父组件App定义属性，传递给子组件Son
  const appName = 'App Name'

  return (
    <div>
      {/* 2. 子组件接收父组件传递的属性 */}
      <Son appName={appName}/>
    </div>
  )
}

export default App