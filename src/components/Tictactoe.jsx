import React from 'react'

const Tictactoe = () => {
    return (
        <div className="main-container">
            <h1>Tutorial: Tic-Tac-Toe</h1>
            <p className="intro">
                You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.
            </p>

            <section>
                <h2>The tutorial is divided into several sections:</h2>
                <ul>
                    <li>Setup for the tutorial will give you a starting point to follow the tutorial.</li>
                    <li>Overview will teach you the fundamentals of React: components, props, and state.</li>
                    <li>Completing the game will teach you the most common techniques in React development.</li>
                    <li>Adding time travel will give you a deeper insight into the unique strengths of React.</li>
                    <li>How to respond to events and update the screen</li>
                    <li>How to share data between components</li>
                </ul>
            </section>

            <section>
                <h2>What are you building? </h2>
                <p>
                    In this tutorial, you’ll build an interactive tic-tac-toe game with React.

                    You can see what it will look like when you’re finished here:
                </p>
                <p>If the code doesn’t make sense to you yet, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.

We recommend that you check out the tic-tac-toe game above before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.

Once you’ve played around with the finished tic-tac-toe game, keep scrolling. You’ll start with a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.</p>
            </section>

            <section>
                <h2>Setup for the tutorial </h2>
                <p>
                   In the live code editor below, click Fork in the top-right corner to open the editor in a new tab using the website CodeSandbox. CodeSandbox lets you write code in your browser and preview how your users will see the app you’ve created. The new tab should display an empty square and the starter code for this tutorial.
                </p>
                
            </section>
        </div>
    )
}

export default Tictactoe