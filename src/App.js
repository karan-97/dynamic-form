import "./App.css";
import Header from "./Components/Common/Header";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import TemplateListing from "./Components/Template/TemplateListing";
import CreateTemplate from "./Components/Template/CreateTemplate";
import PreviewTemplate from "./Components/Template/PreviewTemplate";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TemplateListing title={"Template Listing"}/>} />
        <Route path="/create" element={<CreateTemplate title={"Create Template"}/>} />
        <Route path="/preview" element={<PreviewTemplate />} />
      </Routes>
    </div>
  );
}

export default App;
