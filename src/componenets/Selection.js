import React from "react";

function Selection({ id, setId, data }) {
  return (
    data && (
      <div>
        {data.map((module) => (
          <button onClick={() => setId(module.id)}>{module.moduleName}</button>
        ))}
      </div>
    )
  );
}

export default Selection;
