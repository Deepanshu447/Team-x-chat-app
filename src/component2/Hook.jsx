import React from 'react'

const Hook = () => {
  return (
     <div className="main-container">
            <h1>Hook</h1>
            <p className="intro">
                React is a JavaScript library for rendering user interfaces (UI). UI is built from small units like buttons, text, and images. React lets you combine them into reusable, nestable components. From web sites to phone apps, everything on the screen can be broken down into components. In this chapter, you’ll learn to create, customize, and conditionally display React components.
            </p>

            <section>
                <h2>In this chapter</h2>
                <ul>
                    <li>How to write your first React component</li>
                    <li>When and how to create multi-component files</li>
                    <li>How to add markup to JavaScript with JSX</li>
                    <li>How to use curly braces with JSX to access JavaScript functionality from your components</li>
                    <li>How to configure components with props</li>
                    <li>How to conditionally render components</li>
                    <li>How to render multiple components at a time</li>
                    <li>How to avoid confusing bugs by keeping components pure</li>
                    <li>Why understanding your UI as trees is useful</li>
                </ul>
            </section>

            <section>
                <h2>Importing and exporting components</h2>
                <p>
                    You can declare many components in one file, but large files can get difficult to navigate. To solve this, you can export a component into its own file, and then import that component from another file:
                </p>
                <p>React components are JavaScript functions that return markup:</p>
            </section>

            <section>
                <h2>Writing markup with JSX</h2>
                <p>
                   Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information.

If we paste existing HTML markup into a React component, it won’t always work:
                </p>
                <p>Have a look at the result:</p>
            </section>
        </div>
  )
}

export default Hook