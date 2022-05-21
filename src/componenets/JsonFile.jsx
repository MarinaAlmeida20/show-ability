import React from "react"

function JsonFile() { 
    let data = [{
      "id": 5,
      "moduleName": "DevOps",
      "mainProject": {
          "name": "DevOps",
          "url": "https://github.com/CodeYourFuture/JavaScript-Core-3-Classwork-Week4-London8/"
      },
      "assignments": [
          {
              "name": "Run unit tests on Github",
              "url": "https://github.com/CodeYourFuture/JavaScript-Core-3-Classwork-Week4-London8/"
          },
          {
              "name": "DevOps Basic I",
              "url": ""
          },
          {
              "name": "DevOps Basic III",
              "url": "https://github.com/CodeYourFuture/DevOps-Basics-Lesson-3-London8"
          },
          {
              "name": "DevOps Advanced I - Docker",
              "url": ""
          },
          {
              "name": "DevOps Advanced II - More Docker",
              "url": ""
          }
      ]
  }]
  
  
    return (
      <div>
        {data.map(element => {
          return ( 
            <div>
            <p>Module Name: {element.moduleName}</p>
            <p>URL: <a href="element.mainProject.url">Github link</a></p>
            <ul>
              {element.assignments.map(el => {
                return <li><a href={el.url}>{el.name}</a></li>
              })}
            </ul>
            </div>
          )
        })}
      </div>
    )
  
   }