import React from 'react'

const Apis = () => {
    return (
        <div className="main-container">
            <h1>React DOM APIs</h1>
            <p className="intro">
                The react-dom package contains methods that are only supported for the web applications (which run in the browser DOM environment). They are not supported for React Native.
            </p>
            <section>
                <h2>Resource Preloading APIs</h2>
                <p>These APIs can be used to make apps faster by pre-loading resources such as scripts, stylesheets, and fonts as soon as you know you need them, for example before navigating to another page where the resources will be used.</p>
                <p>React-based frameworks frequently handle resource loading for you, so you might not have to call these APIs yourself. Consult your framework’s documentation for details.</p>
                <ul>
                    <li><code>prefetchDNS</code> lets you prefetch the IP address of a DNS domain name that you expect to connect to.</li>
                    <li><code>preconnect</code> lets you connect to a server you expect to request resources from, even if you don’t know what resources you’ll need yet.</li>
                    <li><code>preload</code> lets you fetch a stylesheet, font, image, or external script that you expect to use.</li>
                    <li><code>preloadModule</code> lets you fetch an ESM module that you expect to use.</li>
                    <li><code>preinit</code> lets you fetch and evaluate an external script or fetch and insert a stylesheet.</li>
                    <li><code>preinitModule</code> lets you fetch and evaluate an ESM module.</li>

                </ul>
            </section>

            <section>
                <h2>Entry points</h2>
                <p>The react-dom package provides two additional entry points:</p>
                <ul>
                    <li>
                        react-dom/client contains APIs to render React components on the client (in the browser).

                    </li>
                    <li>react-dom/server contains APIs to render React components on the server.</li>
                </ul>
            </section>

            <section>
                <h2>Removed APIs</h2>
                <p>These APIs were removed in React 19:</p>
                <ul>
                    <li><code>findDOMNode</code>: see alternatives.</li>
                    <li><code>hydrate</code>: use <code>hydrateRoot</code> instead.</li>
                    <li><code>render</code>: use <code>createRoot</code> instead.</li>
                    <li><code>unmountComponentAtNode</code>: use <code>root.unmount()</code> instead.</li>
                    <li><code>renderToNodeStream</code>: use <code>react-dom/server</code> APIs instead.</li>
                    <li><code>renderToStaticNodeStream</code>: use <code>react-dom/server</code> APIs instead.</li>
                </ul>
            </section>
        </div>
    )
}

export default Apis