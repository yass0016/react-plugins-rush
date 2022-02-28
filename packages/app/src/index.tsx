import React, { useState, useEffect, Fragment } from "react";
import { render } from "react-dom";

const App = () => {
  const [components, setComponents] = useState<React.Component[]>([]);

  useEffect(() => {
    document.addEventListener(
      "add",
      function (e: any) {
        console.log(e.detail);
        setComponents((prevState) => [...prevState, e.detail.component]);
      },
      false
    );
  }, []);

  return (
    <div>
      {components.map((Component: React.Component, index) => {
        return <Fragment key={index}>{Component}</Fragment>;
      })}
    </div>
  );
};

const w = window as any;

w["custom"] = {
  add: (component: React.Component) => {
    const event = new CustomEvent("add", {
      detail: {
        component: component,
      },
    });

    // Dispatch the event.
    document.dispatchEvent(event);
  },
};

const container = document.getElementById("react-root");
render(<App />, container);
