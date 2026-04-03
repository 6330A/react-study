const count = 100

function getName(){
  return 'Jack'
}

function App() {
  return (
    <div className="App">
      你好啊🤔!!
      {/**使用引号传递字符串 */}
      {'this is 引号传递的字符串'}
      {/**识别变量 */}
      {count}
      {/**函数调用 */}
      {getName()}
      {/**方法调用 */}
      {new Date().getDate()}
      {/**使用js对象 */}
      <div style={{color: 'red'}}> 一个div </div>
    </div>
  )
}

export default App
