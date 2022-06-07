import "./app.css";

const players = [
  { id: 1, name: "梅西" },
  { id: 2, name: "内马尔" },
  { id: 3, name: "苏亚雷斯" },
];
const flag = true;
const styleObj = { color: "blue" };
const showTitle = true;

function App() {
  return (
    <div className="app">
      <ul>
        {players.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <div style={{ color: "red" }}>{flag ? <h1>ok</h1> : "no"}</div>
      <div style={styleObj}>test</div>
      <div className="title">test222</div>
      <div className={showTitle ? "title" : ""}>test333</div>
    </div>
  );
}

export default App;
