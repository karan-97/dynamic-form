import React, { useEffect, useState } from "react";

const ComponentLayout = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.components);
  }, [props.components]);
  return (
    <>
      {data.map((component) => {
        return (
          <div key={component.id}>
            <div className="card" style={{ width: "18rem", margin: "5%" }}>
              <div className="card-body">
                <h5 className="card-title"></h5>
                <input
                  type={"text"}
                  placeholder="Enter Label Name"
                  onChange={(e) =>
                    props.changeComponentLabel(
                      component.id,
                      e.target.value
                    )
                  }
                />

                <div className="row">
                  <div className="col-sm">DropDown Options</div>
                  <div className="col-sm">
                    <button
                      onClick={() => {
                        props.addOptions(component.id);
                      }}
                    >
                      {"+"}
                    </button>
                  </div>
                </div>
                <div className="container">
                  {component?.options?.map((option) => {
                    return (
                      <React.Fragment key={option.id}>
                        <input
                          type={option.type}
                          label={option.label}
                          value={option.value}
                          onChange={(e) =>
                            props.changeOptionValue(
                              component.id,
                              option.id,
                              e.target.value
                            )
                          }
                        />
                        <button
                          onClick={() => {
                            props.removeOptions(component.id, option.id);
                          }}
                        >
                          {"X"}
                        </button>
                      </React.Fragment>
                    );
                  })}
                </div>
                <button
                  onClick={() => {
                    {
                      console.log("id in remove section ", component.id);
                    }
                    props.remove(component.id);
                  }}
                >
                  {"Remove"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ComponentLayout;
