import React from 'react'

// 受控表单组件
class InputComponent extends React.Component {
  state = {
    msg: 'this is msg'
  }
  changeHander = (e) => {
    this.setState({ msg: e.target.value })
  }
  render() {
    return (
      <div>
        <input value={this.state.msg} onChange={this.changeHander} />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}

export default App
