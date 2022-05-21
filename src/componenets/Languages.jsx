import React from "react";

function Languages({ lang }) {
  return (
    lang && (
      <div>
        return (
        <div>
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
        );
      </div>
    )
  );
}
export default Languages;
