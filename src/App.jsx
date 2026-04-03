const article = 2 // 0 1 3


function getRritcleTem() {
  if (article === 0) {
    return <div>文章类型0</div>
  } else if (article === 1) {
    return <div>文章类型1</div>
  } else if (article === 2) {
    return <div>文章类型2</div>
  }
}

function App() {
  return (
    <div className="App">
      {getRritcleTem()}
    </div>
  )
}

export default App
