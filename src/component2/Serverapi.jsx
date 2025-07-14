import React from 'react'

const Serverapi = () => {
    return (
        <div className="main-container">
            <h1>Server React DOM APIs</h1>
            <p className="intro">
                The react-dom/server APIs let you server-side render React components to HTML. These APIs are only used on the server at the top level of your app to generate the initial HTML. A framework may call them for you. Most of your components don’t need to import or use them.
            </p>

            <section>
                <h2>Server APIs for Node.js Streams</h2>
                <ul>
                    <li>These methods are only available in the environments with Node.js Streams:</li>
                    <li>renderToPipeableStream renders a React tree to a pipeable Node.js Stream.</li>
                    <li>How to add markup to JavaScript with JSX</li>
                </ul>
            </section>

            <section>
                <h2>Server APIs for Web Streams </h2>
                <p>
                    These methods are only available in the environments with Web Streams, which includes browsers, Deno, and some modern edge runtimes:
                </p>
                <p>renderToReadableStream renders a React tree to a Readable Web Stream.</p>
            </section>

            <section>
                <h2>Legacy Server APIs for non-streaming environments</h2>
                <p>
                    These methods can be used in the environments that don’t support streams:

                    renderToString renders a React tree to a string.
                    renderToStaticMarkup renders a non-interactive React tree to a string.
                    They have limited functionality compared to the streaming APIs.
                </p>
                <p>Have a look at the result:</p>
            </section>
        </div>
    )
}

export default Serverapi