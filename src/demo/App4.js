import React from "react";

// 类组件的状态
class Counter extends React.Component {
  // 初始化状态
  state = { count: 0 };
  // 定义修改数据的方法
  setCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    // 读取状态
    return <button onClick={this.setCount}>计数器{this.state.count}</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;

// React 中的状态不可变,不要直接修改状态的值,而是基于当前状态创建新的状态值
// state = {
//   count: 0,
//   list: [1, 2, 3],
//   person: {
//     name: "jack",
//     age: 18,
//   },
// };
// // 基于当前状态创建新值
// this.setState({
//   count:this.state.count +1,
//   list: [...this.state.list,4],
//   person:{...this.state.person,name:"messi"}
// })
