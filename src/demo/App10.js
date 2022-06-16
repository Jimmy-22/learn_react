import React, { createContext } from 'react'
// 跨组件通信Context

// 1.创建context对象
const { Provider, Consumer } = createContext()

// 3.消费数据
function ComC() {
  return <Consumer>{(value) => <div>{value}</div>}</Consumer>
}

function ComA() {
  return <ComC />
}

// 2.提供数据
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="App">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
