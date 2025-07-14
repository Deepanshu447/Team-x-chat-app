import React from 'react'

const QuickStart = () => {
  return (
   <div className="main-container">
      <h1>Quick Start</h1>
      <p className="intro">
        Welcome to the React documentation! This page will give you an introduction to 80% of the React concepts that you will use on a daily basis.
      </p>

      <section>
        <h2>You will learn:</h2>
        <ul>
          <li>How to create and nest components</li>
          <li>How to add markup and styles</li>
          <li>How to display data</li>
          <li>How to render conditions and lists</li>
          <li>How to respond to events and update the screen</li>
          <li>How to share data between components</li>
        </ul>
      </section>

      <section>
        <h2>Creating and Nesting Components</h2>
        <p>
          React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance.
          A component can be as small as a button, or as large as an entire page.
        </p>
        <p>React components are JavaScript functions that return markup:</p>
      </section>

      <section>
        <h2>Component Naming</h2>
        <p>
          Notice that <code>{`<MyButton />`}</code> starts with a capital letter. That’s how you know it’s a React component.
          React component names must always start with a capital letter, while HTML tags must be lowercase.
        </p>
        <p>Have a look at the result:</p>
      </section>
      <section>
        <h2>Component Naming</h2>
        <p>
          Notice that <code>{`<MyButton />`}</code> starts with a capital letter. That’s how you know it’s a React component.
          React component names must always start with a capital letter, while HTML tags must be lowercase.
        </p>
        <p>Have a look at the result:</p>
      </section>
    </div>
  )
}

export default QuickStart