import { useState } from "react";
import React from "react";

function Selection() {
  const [id, setId] = useState(1);
  let data = [
    {
      id: 5,
      moduleName: "DevOps",
      mainProject: {
        name: "DevOps",
        url: "https://github.com/CodeYourFuture/JavaScript-Core-3-Classwork-Week4-London8/",
      },
      assignments: [
        {
          name: "Run unit tests on Github",
          url: "https://github.com/CodeYourFuture/JavaScript-Core-3-Classwork-Week4-London8/",
        },
        {
          name: "DevOps Basic I",
          url: "",
        },
        {
          name: "DevOps Basic III",
          url: "https://github.com/CodeYourFuture/DevOps-Basics-Lesson-3-London8",
        },
        {
          name: "DevOps Advanced I - Docker",
          url: "",
        },
        {
          name: "DevOps Advanced II - More Docker",
          url: "",
        },
      ],
    },
    {
      id: 6,
      moduleName: "PD Body",
      mainProject: {
        name: "PD",
        url: "",
      },
      assignments: [
        {
          name: "Prepare a 3 minute presentation (PD)",
          url: "",
        },
        {
          name: "Create 3 SMART PD goals",
          url: "",
        },
        {
          name: "PD assignment - writing workshop",
          url: "",
        },
      ],
    },
  ];

  function showDetails(id) {
    setId(id);
    console.log(id);
  }

  return (
    <div>
      <h2>
        Hello CYF trainees, click on the buttons below to learn about what
        London8 has learnt
      </h2>
      {data.map((module) => (
        <button onClick={() => showDetails(module.id)}>
          {module.moduleName}
        </button>
      ))}
    </div>
  );
}

export default Selection;
