import React from 'react'
// 兄弟组件通信

// 子组件A
function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  )
}

// 子组件B
function SonB(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg('new msg')}>点我B</button>
    </div>
  )
}

class App extends React.Component {
  // 父组件提供状态数据
  state = { message: 'this is a message' }
  // 提供修改数据的方法
  changeMsg = () => {
    this.setState({ message: 'newMsg' })
  }

  render() {
    return (
      <>
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default App
