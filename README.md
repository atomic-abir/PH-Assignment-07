1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML but works inside JavaScript.

It allows you to write UI elements in a syntax that closely resembles HTML, but it gets compiled into JavaScript function calls (React.createElement).

Why it’s used:

Makes code more readable and declarative.

Lets you combine HTML-like structure with JavaScript logic.

Easier to write and maintain React components.

Example:

const element = <h1>Hello, React!</h1>;


This gets compiled into:

const element = React.createElement("h1", null, "Hello, React!");

2. What is the difference between State and Props?
Feature	State	Props
Definition	A component’s internal data (managed within the component).	Data passed from parent to child component.
Mutability	Mutable (can change with setState or useState).	Immutable (read-only inside the child).
Who updates it?	Component itself updates its own state.	Parent component controls props.
Usage	Used to handle dynamic data that changes within the component.	Used to pass data & functions to child components.
3. What is the useState hook, and how does it work?

useState is a React Hook that lets you add state to functional components.

It returns two values:

The current state.

A function to update that state.

Example:

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // initial value = 0

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}


Here:

count → state value

setCount → function to update state

4. How can you share state between components in React?

Ways to share state:

Props (Parent → Child): Pass state as props to child components.

Lifting State Up: Move shared state to the closest common parent, then pass it down.

Context API: For global state sharing without prop-drilling.

State Management Libraries: (e.g., Redux, Zustand, Recoil) for large apps.

Example (lifting state up):

function Parent() {
  const [message, setMessage] = useState("Hello");

  return (
    <div>
      <Child message={message} />
      <AnotherChild setMessage={setMessage} />
    </div>
  );
}

function Child({ message }) {
  return <p>{message}</p>;
}

function AnotherChild({ setMessage }) {
  return <button onClick={() => setMessage("Hi from child!")}>Update</button>;
}

5. How is event handling done in React?

React uses camelCase syntax for events (onClick, onChange, etc.).

Event handlers are usually written as functions.

Unlike plain HTML, you pass a function reference (not a string).

Example:

function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
