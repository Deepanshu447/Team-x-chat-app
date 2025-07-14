import React from 'react'

const Communityhome = () => {
    return (
        <div className="main-container">
            <h1>React Community</h1>
            <p className="intro">
                React has a community of millions of developers. On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.
            </p>
            <section>
                <h2>Code of Conduct </h2>
                <p>
                    Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.
                </p>
            </section>
            <section>
                <h2>Stack Overflow </h2>
                <p>
                    Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the existing questions tagged with reactjs or ask your own!
                </p>
            </section>

            <section>
                <h2>Popular Discussion Forums</h2>
                <p>There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit.</p>
                <p>Each community consists of many thousands of React users.</p>
                <ul>
                    <li>DEV’s React community</li>
                    <li>Hashnode’s React community</li>
                    <li>Reactiflux online chat</li>
                    <li>Reddit’s React community</li>
                </ul>
            </section>

            <section>
                <h2>News  </h2>
                <p>
                    For the latest news about React, follow @reactjs on Twitter, @react.dev on Bluesky and the official React blog on this website.
                </p>
            </section>


        </div>
    )
}

export default Communityhome