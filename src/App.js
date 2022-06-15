import React, { createRef } from 'react'

// 非受控表单组件
class InputComponent extends React.Component {
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()
  changeHandle = () => {
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <div>
        {/* ref绑定，获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandle}>点我</button>
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
