import React, { useState, useEffect, Fragment } from 'react';
import { render } from 'react-dom';

const App = () => {
  const [components, setComponents] = useState<JSX.Element[]>([]);

  useEffect(() => {
    document.addEventListener(
      'add',
      function (e: any) {
        console.log('called');
        setComponents((prevState) => [...prevState, e.detail.component]);
      },
      false,
    );
  }, []);

  return (
    <div>
      {components.map((component, index) => {
        return <Fragment key={index}>{component}</Fragment>;
      })}
    </div>
  );
};

const w = window as any;

w['custom'] = {
  add: () => {
    const event = new CustomEvent('add', {
      detail: {
        component: <div>Hello</div>,
      },
    });

    // Dispatch the event.
    document.dispatchEvent(event);
  },
};

const container = document.getElementById('react-root');
render(<App />, container);
