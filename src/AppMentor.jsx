import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "Dell",
    title: "front-End",
    mentor: { name: "Bab", title: "senior developer" },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name}({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name: name },
          }));
        }}
      >
        멘토이름바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토타이틀바꾸기
      </button>
    </div>
  );
}
