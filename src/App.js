import React from 'react'

function Son(props) {
  function handleClick() {
    // 3.子组件通过props调用 callback
    props.changeMsg('new Message')
  }
  return (
    <div>
      {props.msg}
      <button onClick={handleClick}>change</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message!'
  }

  // 1.提供callback-用于接收数据
  // 4.将子组件中的数据作为参数传递给callback
  changeMessage = (newMsg) => {
    console.log('子组件传过来的数据', newMsg)
    this.setState({
      message: newMsg
    })
  }

  render() {
    return (
      <div>
        <div>父组件</div>
        {/* 2.将函数作为属性的值，传给子组件 */}
        <Son msg={this.state.message} changeMsg={this.changeMessage} />
      </div>
    )
  }
}

export default App
