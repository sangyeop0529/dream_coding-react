import "./App.css";

export default function AppJSX() {
  const name = "Dell";
  const list = ["Milk", "Orange", "Banana", "apple"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello!!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img
        style={{ height: "200px" }}
        src="https://plus.unsplash.com/premium_photo-1680268643503-a9956959e8f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="img"
      />
    </>
  );
}
