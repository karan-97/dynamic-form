import React, { useEffect, useState } from "react";
import '../../css/ComponentLayout.css'

const ComponentLayout = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.components);
  }, [props.components]);
  return (
    <>
      <div className="scrollLayout">
        {data.map((component) => {
          return (
            <div key={component.id} >
              <div className="card" style={{ width: "100%", margin: "5%" }}>
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

                  <div className="row mt-3">
                    <div className="col-md-8">DropDown Options</div>
                    <div className="col-md-4">
                      <button className="btn btn-primary"
                        onClick={() => {
                          props.addOptions(component.id);
                        }}
                      >
                        {"+"}
                      </button>
                    </div>
                  </div>
                  <div className="row mt-2">
                    {component?.options?.map((option) => {
                      return (
                        <React.Fragment key={option.id}>
                          <div className="col-md-6">
                            <input
                              className="form-control"
                              style={{ width: "50%" }}
                              placeholder="Enter option value"
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
                          </div>
                          <div className="col-md-4">
                            <button
                              className="btn btn-danger"
                              onClick={() => {
                                props.removeOptions(component.id, option.id);
                              }}
                            >
                              {"X"}
                            </button>
                          </div>


                        </React.Fragment>
                      );
                    })}
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
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
      </div>
    </>
  );
};

export default ComponentLayout;
