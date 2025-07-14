import React from 'react'

const Components = () => {
  return (
     <div className="main-container">
            <h1>Built-in React Components</h1>
            <p className="intro">
               React exposes a few built-in components that you can use in your JSX.
            </p>

            <section>
                <h2>Built-in components</h2>
                <ul>
                    <li>&lt;Fragment&gt;, alternatively written as <>...</>, lets you group multiple JSX nodes together.</li>
                    <li>&gt;Profiler&gt; lets you measure rendering performance of a React tree programmatically.</li>
                    <li>&gt;Suspense&gt; lets you display a fallback while the child components are loading.</li>
                    <li>&gt;StrictMode&gt; enables extra development-only checks that help you find bugs early.</li>
                </ul>
            </section>

            <section>
                <h2>Your own components </h2>
                <p>
                    You can also define your own components as JavaScript functions.
                </p>
            </section>

        </div>
  )
}

export default Components