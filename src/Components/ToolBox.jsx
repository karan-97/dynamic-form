import React from "react";

function ToolBox(props) {

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
