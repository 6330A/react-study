const count = 100

const list = [
  { id: 100, name: 'Vue' },
  { id: 101, name: 'React' },
  { id: 102, name: 'Angular' },
]

function App() {
  return (
    <div className="App">
      {/**渲染列表 */}
      {/**map循环哪个结构 return结构 */ */}
      <ul>
        {/* {list.map(item => <li>hello!</li>)} */}
        {/**注意绑定key */}
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  )
}

export default App
