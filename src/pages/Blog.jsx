import React from 'react'

const Blog = () => {
  return (
    <div className='main-container mx-auto'>
      <section>
  <h1>React Blog</h1>
  <p>
    This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first.
  </p>
  <p>
    You can also follow the <a href="https://bsky.app/profile/react.dev">@react.dev</a> account on Bluesky, or <a href="https://twitter.com/reactjs">@reactjs</a> account on Twitter, but you won’t miss anything essential if you only read this blog.
  </p>
</section>

<section>
  <h2>Recent Posts</h2>
  <ul>
    <li>
      <h2>React Labs: View Transitions, Activity, and more</h2>
      <p><strong>Date:</strong> April 23, 2025</p>
      <p>
        In React Labs posts, we write about projects in active research and development. In this post, we’re sharing two new experimental features that are ready to try today, and sharing other areas we’re working on now …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>React Compiler RC</h2>
      <p><strong>Date:</strong> April 21, 2025</p>
      <p>We are releasing the compiler’s first Release Candidate (RC) today.</p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>Sunsetting Create React App</h2>
      <p><strong>Date:</strong> February 14, 2025</p>
      <p>
        Today, we’re deprecating Create React App for new apps, and encouraging existing apps to migrate to a framework, or to a build tool like Vite, Parcel, or RSBuild. We’re also providing docs for when a framework isn’t a good fit for your project, you want to build your own framework, or you just want to learn how React works by building a React app from scratch …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>React v19</h2>
      <p><strong>Date:</strong> December 5, 2024</p>
      <p>
        In the React 19 Upgrade Guide, we shared step-by-step instructions for upgrading your app to React 19. In this post, we’ll give an overview of the new features in React 19, and how you can adopt them …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>React Compiler Beta Release</h2>
      <p><strong>Date:</strong> October 21, 2024</p>
      <p>
        We announced an experimental release of React Compiler at React Conf 2024. We’ve made a lot of progress since then, and in this post we want to share what’s next for React Compiler …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>React Conf 2024 Recap</h2>
      <p><strong>Date:</strong> May 22, 2024</p>
      <p>
        Last week we hosted React Conf 2024, a two-day conference in Henderson, Nevada where 700+ attendees gathered in-person to discuss the latest in UI engineering. This was our first in-person conference since 2019, and we were thrilled to be able to bring the community together again …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
    <li>
      <h2>React 19 Upgrade Guide</h2>
      <p><strong>Date:</strong> April 25, 2024</p>
      <p>
        The improvements added to React 19 require some breaking changes, but we’ve worked to make the upgrade as smooth as possible, and we don’t expect the changes to impact most apps. In this post, we will guide you through the steps for upgrading libraries to React 19 …
      </p>
      <p><a href="#">Read more</a></p>
    </li>
  </ul>
</section>

    </div>
  )
}

export default Blog