import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

export default function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("출력됨");
  };
  return (
    <>
      <button onClick={handleClick}>Button</button>

      <Avatar
        image="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1681860317375-fdcc92563f5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        name="Jenny"
        title="Front-End"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1681502014975-13def4b24576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        name="Susan"
        title="Back-End"
      />
      <Profile
        image="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        name="Julian"
        title="Designer"
      />
    </>
  );
}
