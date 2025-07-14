import React from 'react'

const Addinginteractivity = () => {
    return (
        <div className="main-container">
            <h1>Adding Interactivity</h1>
            <p className="intro">
                Some things on the screen update in response to user input. For example, clicking an image gallery switches the active image. In React, data that changes over time is called state. You can add state to any component, and update it as needed. In this chapter, you’ll learn how to write components that handle interactions, update their state, and display different output over time.
            </p>

            <section>
                <h2>In this chapter</h2>
                <ul>
                    <li>How to handle user-initiated events</li>
                    <li>How to make components “remember” information with state</li>
                    <li>How React updates the UI in two phases</li>
                    <li>Why state doesn’t update right after you change it</li>
                    <li>How to queue multiple state updates</li>
                    <li>How to update an object in state</li>
                    <li>How to update an array in state</li>
                </ul>
            </section>

            <section>
                <h2>Responding to events</h2>
                <p>
                    React lets you add event handlers to your JSX. Event handlers are your own functions that will be triggered in response to user interactions like clicking, hovering, focusing on form inputs, and so on.

Built-in components like only support built-in browser events like onClick. However, you can also create your own components, and give their event handler props any application-specific names that you like.
                </p>
                <p>React components are JavaScript functions that return markup:</p>
            </section>

            <section>
                <h2>State: a component’s memory</h2>
                <p>Components often need to change what’s on the screen as a result of an interaction. Typing into the form should update the input field, clicking “next” on an image carousel should change which image is displayed, clicking “buy” puts a product in the shopping cart. Components need to “remember” things: the current input value, the current image, the shopping cart. In React, this kind of component-specific memory is called state.

You can add state to a component with a useState Hook. Hooks are special functions that let your components use React features (state is one of those features). The useState Hook lets you declare a state variable. It takes the initial state and returns a pair of values: the current state, and a state setter function that lets you update it.</p>
            </section>
        </div>
    )
}

export default Addinginteractivity