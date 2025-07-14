import React from 'react'

const Staticapi = () => {
    return (
        <div className="main-container">
            <h1>Static React DOM APIs</h1>
            <p className="intro">
                The react-dom/static APIs let you generate static HTML for React components. They have limited functionality compared to the streaming APIs. A framework may call them for you. Most of your components don’t need to import or use them.
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
                <h2>Static APIs for Web Streams </h2>
                <p>
                    These methods are only available in the environments with Web Streams, which includes browsers, Deno, and some modern edge runtimes:
                </p>
                <p>prerender renders a React tree to static HTML with a Readable Web Stream.</p>
            </section>

            <section>
                <h2>Static APIs for Node.js Streams </h2>
                <p>
                    These methods are only available in the environments with Node.js Streams:
                    prerenderToNodeStream renders a React tree to static HTML with a Node.js Stream.
                </p>
                <p>Have a look at the result:</p>
            </section>
        </div>
    )
}

export default Staticapi