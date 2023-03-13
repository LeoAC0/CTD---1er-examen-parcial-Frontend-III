import React, { Fragment } from "react";
import { Color } from "./Color";
import { useState } from "react";
import { ViewValues } from "./ViewValues";
import { Container } from "./styles/StyledComponents";
import "./App.css";

const App = () => {
  const [view, setView] = useState("elegirColor");
  const [values, setValues] = useState(null);

  const handleFetchValues = (colorInformation) => {
    setValues(colorInformation);
    setView("viewValues");
  };
  return (
    <Fragment>
      <Container>
        <Color handleFetchValues={handleFetchValues} />
      </Container>
      <Container className="App">
        {view === "viewValues" && <ViewValues {...values} />}
      </Container>
    </Fragment>
  );
};

export default App;
