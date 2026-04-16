import { useContext, createContext } from 'react'

const MsgContext = createContext()

// APP -> B -> A
function A() {

  const msg = useContext(MsgContext)
  return (
    <div>
      this is A component {msg}
    </div>
  )
}

function B() {

  return (
    <div>
      this is B component
      <A />
    </div>
  )
}

function App() {

  return (
    <div>
      <MsgContext.Provider value={'msg from app 跨层传递'}>
        this App component
        <B />
      </MsgContext.Provider>
    </div>
  )
}

export default App