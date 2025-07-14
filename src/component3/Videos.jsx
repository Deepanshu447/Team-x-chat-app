import React from 'react'

const Videos = () => {
    return (
        <div className="main-container">
            <section>
                <h1>React Videos</h1>
                <p>Videos dedicated to the discussion of React and the React ecosystem.</p>
            </section>

            <section>
                <h2>React 18 Keynote</h2>
                <p>In the keynote, we shared our vision for the future of React starting with React 18.</p>
                <p>Watch the full keynote from Andrew Clark, Juan Tejada, Lauren Tan, and Rick Hanlon here:</p>
            </section>

            <section>
                <h2>React 18 for Application Developers</h2>
                <p>For a demo of upgrading to React 18, see Shruti Kapoor’s talk here:</p>
            </section>

            <section>
                <h2>Streaming Server Rendering with Suspense</h2>
                <p>
                    React 18 also includes improvements to server-side rendering performance using Suspense.
                    Streaming server rendering lets you generate HTML from React components on the server,
                    and stream that HTML to your users.
                </p>
                <p>
                    In React 18, you can use Suspense to break down your app into smaller independent units
                    which can be streamed independently of each other without blocking the rest of the app.
                    This means users will see your content sooner and be able to start interacting with it much faster.
                </p>
                <p>For a deep dive, see Shaundai Person’s talk here:</p>
            </section>

            <section>
                <h2>The First React Working Group</h2>
                <p>
                    For React 18, we created our first Working Group to collaborate with a panel of experts,
                    developers, library maintainers, and educators. Together we worked to create our gradual
                    adoption strategy and refine new APIs such as <code>useId</code>, <code>useSyncExternalStore</code>,
                    and <code>useInsertionEffect</code>.
                </p>
                <p>For an overview of this work, see Aakansha Doshi’s talk:</p>
            </section>

            <section>
                <h2>React Developer Tooling</h2>
                <p>
                    To support the new features in this release, we also announced the newly formed React DevTools
                    team and a new Timeline Profiler to help developers debug their React apps.
                </p>
                <p>For more information and a demo of new DevTools features, see Brian Vaughn’s talk:</p>
            </section>

            <section>
                <h2>React without memo</h2>
                <p>
                    Looking further into the future, Xuan Huang (黄玄) shared an update from our React Labs research
                    into an auto-memoizing compiler.
                </p>
                <p>Check out this talk for more information and a demo of the compiler prototype:</p>
            </section>

            <section>
                <h2>React Docs Keynote</h2>
                <p>
                    Rachel Nabors kicked off a section of talks about learning and designing with React with a keynote
                    about our investment in React’s new docs (now shipped as <a href="https://react.dev">react.dev</a>):
                </p>
            </section>

            <section>
                <h2>Learning & Designing with React</h2>
                <ul>
                    <li>Debbie O’Brien: Things I learnt from the new React docs.</li>
                    <li>Sarah Rainsberger: Learning in the Browser.</li>
                    <li>Linton Ye: The ROI of Designing with React.</li>
                    <li>Delba de Oliveira: Interactive playgrounds with React.</li>
                </ul>
            </section>

            <section>
                <h2>Talks from Relay, React Native, and PyTorch Teams</h2>
                <ul>
                    <li>Robert Balicki: Re-introducing Relay.</li>
                    <li>Eric Rozell and Steven Moyes: React Native Desktop.</li>
                    <li>Roman Rädle: On-device Machine Learning for React Native.</li>
                </ul>
            </section>

            <section>
                <h2>Community Talks: Accessibility, Tooling, and Server Components</h2>
                <ul>
                    <li>Daishi Kato: React 18 for External Store Libraries.</li>
                    <li>Diego Haz: Building Accessible Components in React 18.</li>
                    <li>Tafu Nakazaki: Accessible Japanese Form Components with React.</li>
                    <li>Lyle Troxell: UI tools for artists.</li>
                    <li>Helen Lin: Hydrogen + React 18.</li>
                </ul>
            </section>

        </div>
    )
}

export default Videos