
import './index.css';

function App() {

  return (
    <div className="App">
      {/* 行内样式 */}
      <span style={{ color: 'blue' , fontSize: '40px'}}>hello</span>
      {/* class类名控制 */}
      <span className="foo">world</span>
    </div>
  )
}

export default App