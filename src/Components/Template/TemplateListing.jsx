import React from "react";

const TemplateListing = () => {
  const components = JSON.parse(localStorage.getItem("components"));
  return (
    <>
      <div className="container" style={{marginTop: "10%"}}>
        <ul className="list-group">
          {
            components.map((component, index) => {
              return <>
                  <li class="list-group-item" key={index} style={{listStyle: "none"}}>
                      {component.templateName}
                  </li>
                  </>
                
            })
          }
        </ul>
      </div>
    </>
  );
};

export default TemplateListing;
