import { v4 as uuid } from "uuid";
import React, { useEffect, useState } from "react";
import ToolBox from "../ToolBox";
import elements from "../../Constants/constant";
import ComponentLayout from "../RenderLayout/ComponentLayout";
import PreviewTemplate from "./PreviewTemplate";
import { useNavigate } from "react-router-dom";

const CreateTemplate = () => {
  const [templateName, setTemplateName] = useState("");
  const [components, setComponents] = useState([]);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("component s", components);
  }, [components]);

  const changeTemplateName = (e) => {
    setTemplateName(e.target.value);
  };

  const addComponent = () => {
    let select = { ...elements.select, id: uuid() };
    setComponents((prevComp) => [...prevComp, select]);
  };

  const changeIsRequired = (componentId, checked) => {
    let comps = [...components];
    const updateComponents = comps.map((component) => {
      if (component.id === componentId) {
        component.isRequired = checked;
        return component;
      }
      return component;
    });
    setComponents(updateComponents);
  };

  const removeComponent = (id) => {
    let allComponents = [...components];
    console.log("allcomp ", allComponents);
    allComponents.splice(id, 1);
    setComponents(allComponents);
  };

  const changeComponentLabel = (componentId, value) => {
    let comps = [...components];
    const updateComponents = comps.map((component) => {
      if (component.id === componentId) {
        component.label = value;
        return component;
      }
      return component;
    });
    setComponents(updateComponents);
  };

  const addOptions = (id) => {
    setComponents((comps) =>
      comps.map((component) => {
        if (component.id === id) {
          let option = { ...elements.text, id: uuid() };
          let options = [...component.options];
          options.push(option);
          return { ...component, options: options };
        }
        return component;
      })
    );
  };

  const changeOptionValue = (componentId, optionId, value) => {
    let comps = [...components];
    const updateComponents = comps.map((component) => {
      if (component.id === componentId) {
        let options = component.options.map((option) => {
          if (option.id === optionId) {
            option.label = value;
            option.value = value;
            return option;
          }
          return option;
        });
        return { ...component, options: options };
      }
      return component;
    });
    setComponents(updateComponents);
  };

  const submit = () => {
    setShowAlert(true);
    const allComponents = JSON.parse(localStorage.getItem("components"));
    if (allComponents) {
      let data = [...components];
      let updateComponents = { templateName: templateName, data };
      allComponents.push(updateComponents);
      localStorage.setItem("components", JSON.stringify(allComponents));
    } else {
      let data = [...components];
      let updateComponents = [{ templateName: templateName, data }];
      localStorage.setItem("components", JSON.stringify(updateComponents));
    }
    setTimeout(() => {
      setShowAlert(false);
      navigate(`/`);
    }, 3000);
  };

  const removeOptions = (componentId, optionId) => {
    let comps = [...components];
    const updateComponents = comps.map((component) => {
      if (component.id === componentId) {
        let options = component.options.filter((option) => {
          if (option.id === optionId) {
            return false;
          }
          return true;
        });
        return { ...component, options: options };
      }
      return component;
    });
    setComponents(updateComponents);
  };

  return (
    <>
      <ToolBox addComponent={addComponent} />
      <div className="container">
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Template Name
            </span>
          </div>
          <input
            type="text"
            onChange={(e) => changeTemplateName(e)}
            className="form-control"
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="container">
          <ComponentLayout
            changeIsRequired={changeIsRequired}
            changeComponentLabel={changeComponentLabel}
            removeOptions={removeOptions}
            changeOptionValue={changeOptionValue}
            components={components}
            addOptions={addOptions}
            remove={removeComponent}
          />
        </div>
      </div>
      {components.length > 0 ? (
        <div className="container">
          <button className="btn btn-primary" onClick={() => setShow(true)}>
            Preview
          </button>
          <PreviewTemplate
            components={components}
            title="Template Preview"
            onClose={() => setShow(false)}
            show={show}
          ></PreviewTemplate>
          <button className="btn btn-success" onClick={() => submit()}>
            {" "}
            Submit{" "}
          </button>
        </div>
      ) : (
        ""
      )}
      {showAlert ? (
        <div className="position-relative">
          <div class="position-absolute top-0 start-0">
            <div class="alert alert-success" role="alert">
              {"Template Saved Successfully."}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateTemplate;
