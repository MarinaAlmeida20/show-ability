import React from "react";
import "../styles/selection.css";
function Selection({ id, setId, data }) {
  return (
    data && (
      <div className="selection_cont">
        {data.map((module) => (
          <h3 onClick={() => setId(module.id)}>{module.moduleName}</h3>
        ))}
      </div>
    )
  );
}

export default Selection;
