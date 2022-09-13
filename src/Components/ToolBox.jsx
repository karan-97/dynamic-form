import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import SelectField from "../Constants/SelectField";

function ToolBox(props) {
  const [ToolBox, setToolBox] = useState();

  return (
    <div className="card" style={{ width: "18rem", margin: "5%" }}>
      <div className="card-body">
        <h5 className="card-title">ToolBox</h5>
        <ul className="list-group">
          <li className="list-group-item" onClick={() => {props.addComponent()}}>Drop Down</li>
        </ul>
      </div>
    </div>
  );
}

export default ToolBox;
