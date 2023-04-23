import "./App.css";

function App() {
  const name = "Dell";
  return (
    <>
      <h1 className="orange">Hello!</h1>
      <h2>Hello!!</h2>
      <p>My name is {name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img
        style={{ height: "200px" }}
        src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="img"
      />
    </>
  );
}

export default App;
