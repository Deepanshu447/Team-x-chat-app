import React from 'react'
import logo  from '../assets/React-logo.webp';

const Homepage = () => {
  return (
    <div className=" mx-auto">

      <section className="text-center py-20 bg-gradient-to-r  bg-gray-50 text-gray-800">
        <img className='w-[100px] h-[100px] mx-auto block' src={logo} alt="react logo" />
        <h1 className="text-5xl md:text-6xl font-bold mb-4">React</h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          The library for web and native user interfaces
        </p>
        <div className="mt-8">
          <a
            href="#learn-more"
            className="inline-block bg-gray-300 text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-100 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      <section className="text-center py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Create user interfaces from components
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail, LikeButton, and Video. Then combine them into entire screens, pages, and apps.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.
          </p>
          <div className="mt-8">
            <a
              href="#components"
              className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
            >
              Explore Components
            </a>
          </div>
        </div>
      </section>

      <section className="text-center py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Write components with code and markup
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            React components are JavaScript functions. Want to show some content conditionally? Use an if statement. Displaying a list? Try array map(). Learning React is learning programming.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Have a look at the result:
          </p>
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <pre className="text-left">
              <code>
                {`function Welcome() {
  return <h1>Hello, World!</h1>;
}`}
              </code>
            </pre>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage