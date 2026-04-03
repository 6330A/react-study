
// 传统定义
function Button1() {
  return <button>click me button1!</button>
}

// 箭头函数
const Button2 = () => {
  return <button>click me button2!</button>
}

function App() {

  return (
    <div className="App">
      {/**2.使用组件（渲染组件） */}
      {/**自闭和 */}
      <Button1 />
      {/**成对标签 */}
      <Button2></Button2>

    </div>
  )
}

export default App