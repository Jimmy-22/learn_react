import React from "react";

// 定义函数组件
function HelloFn() {
  return <div>这是一个函数组件</div>;
}

// 定义类组件
class HelloC extends React.Component {
  render() {
    return <div>这是一个类组件</div>;
  }
}

// 定义类组件
function App() {
  return (
    <div className="App">
      {/* 渲染函数组件 */}
      <HelloFn></HelloFn>
      <HelloC />
    </div>
  );
}

export default App;
