
// function App() {

//   const handleClick = () => {
//     console.log("hello click")
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick}>click me</button>
//     </div>
//   )
// }

// export default App



// function App() {

//   // 事件参数e
//   const handleClick = (e) => {
//     console.log("hello click", e)
//   }

//   return (
//     <div className="App">
//       <button onClick={handleClick}>click me</button>
//     </div>
//   )
// }

// export default App



function App() {

  // 事件参数e + 自定义参数
  const handleClick = (e, name) => {
    console.log("hello click", name, e)
  }

  return (
    <div className="App">
      <button onClick={(e) => handleClick(e, 'jack')}>click me</button>
    </div>
  )
}

export default App