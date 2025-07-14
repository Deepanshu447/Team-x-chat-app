import React from 'react'

const Servercomponent = () => {
  return (
     <div className="main-container">
            <h1>Server Component</h1>
            <p className="intro">
                Server Components are a new type of Component that renders ahead of time, before bundling, in an environment separate from your client app or SSR server.

This separate environment is the “server” in React Server Components. Server Components can run once at build time on your CI server, or they can be run for each request using a web server.
            </p>

            <section>
                <h2>In this chapter</h2>
                <ul>
                    <li>Server Components without a Server</li>
<li>Server Components with a Server</li>
<li>Adding interactivity to Server Components</li>
<li>Async components with Server Components</li>
                    <li>How to write your first React component</li>
                    
                </ul>
            </section>

            <section>
                <h2>Server Components without a Server </h2>
                <p>
                   Server components can run at build time to read from the filesystem or fetch static content, so a web server is not required. For example, you may want to read static data from a content management system.
                </p>
                <p>React components are JavaScript functions that return markup:</p>
                <p>This pattern means users need to download and parse an additional 75K (gzipped) of libraries, and wait for a second request to fetch the data after the page loads, just to render static content that will not change for the lifetime of the page.

With Server Components, you can render these components once at build time:</p>
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

export default Servercomponent