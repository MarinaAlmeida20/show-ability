import React from "react";
import "../styles/languages.css";
function Languages({ lang }) {
  return (
    lang && (
      <div className="langs_cont">
        <p>Module Name: {lang.moduleName}</p>
        <p>
          URL: <a href={lang.mainProject.url}>Github link</a>
        </p>
        <ul>
          {lang.assignments.map((el) => {
            return (
              <li>
                <a href={el.url}>{el.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
}
export default Languages;
