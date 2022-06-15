import React from "react";

// 函数组件
// function HelloFn() {
//   const clickHandle = () => {
//     console.log("事件被触发了");
//   };
//   return <button onClick={clickHandle}>点我</button>;
// }

// 获取事件对象
function HelloFn() {
  const clickHandle = (e) => {
    e.preventDefault();
    console.log("事件被触发了", e);
  };
  return (
    <a href="http://www.baidu.com" onClick={clickHandle}>
      百度
    </a>
  );
}

// 类组件
class HelloC extends React.Component {
  clickHandle = () => {
    console.log("事件被触发了");
  };
  render() {
    return <button onClick={this.clickHandle}>点我</button>;
  }
}

function App() {
  return (
    <div className="App">
      <HelloFn></HelloFn>
      <HelloC></HelloC>
    </div>
  );
}

export default App;
