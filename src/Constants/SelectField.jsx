import React, { useState } from "react";

const SelectField = () => {
  //   const [values, setValues] = useState({
  //     name: "",
  //     options: [],
  //     label: {
  //       type: "label",
  //       name: "",
  //     },
  //     validation: {
  //       isRequired: false,
  //     },
  //   });

  //   changeValue = (type, value) => {
  //     switch (type) {
  //       case "NAME":
  //         setValues({ name: value });
  //         break;
  //       case "OPTIONS":
  //         setValues({ name: value });
  //         break;
  //       case "NAME":
  //         setValues({ name: value });
  //         break;
  //       case "NAME":
  //         setValues({ name: value });
  //         break;
  //     }
  //   };

  return (
    <>
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};

export default SelectField;
