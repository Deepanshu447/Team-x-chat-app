import React from 'react'

const Versioningpolicy = () => {
  return (
       <div className="main-container">
            <section>
  <h1>Versioning Policy</h1>
  <p>
    All stable builds of React go through a high level of testing and follow semantic versioning (semver). React also offers unstable release channels to encourage early feedback on experimental features. This page describes what you can expect from React releases.
  </p>
  <p>
    This versioning policy describes our approach to version numbers for packages such as <code>react</code> and <code>react-dom</code>. For a list of previous releases, see the Versions page.
  </p>
</section>

<section>
  <h2>Stable Releases</h2>
  <p>Stable React releases (also known as the “Latest” release channel) follow semantic versioning (semver) principles.</p>
  <p>That means that with a version number <code>x.y.z</code>:</p>
  <ul>
    <li>When releasing critical bug fixes, we make a patch release by changing the <strong>z</strong> number (e.g., 15.6.2 → 15.6.3).</li>
    <li>When releasing new features or non-critical fixes, we make a minor release by changing the <strong>y</strong> number (e.g., 15.6.2 → 15.7.0).</li>
    <li>When releasing breaking changes, we make a major release by changing the <strong>x</strong> number (e.g., 15.6.2 → 16.0.0).</li>
  </ul>
  <p>
    Major releases can also contain new features, and any release can include bug fixes. Minor releases are the most common type of release.
  </p>
  <p>
    If we learn of a security vulnerability in React, we release a backported fix for all major versions that are affected by the vulnerability.
  </p>
</section>

<section>
  <h2>Breaking Changes</h2>
  <p>
    Breaking changes are inconvenient for everyone, so we try to minimize the number of major releases – for example:
  </p>
  <ul>
    <li>React 15 was released in April 2016</li>
    <li>React 16 was released in September 2017</li>
    <li>React 17 was released in October 2020</li>
  </ul>
  <p>We release new features in minor versions, so they are often more significant than major ones.</p>
</section>

<section>
  <h2>Commitment to Stability</h2>
  <p>
    We try to minimize the effort required to adopt new features. Older APIs may still be supported through separate packages.
    For example, mixins are still supported via <code>create-react-class</code>.
  </p>
  <p>
    React is used by over a million developers, including more than 50,000 components at Facebook alone. If our team of less than 10 can upgrade those components, we hope the upgrade will be manageable for everyone.
  </p>
  <p>
    We also include automated upgrade scripts in open source releases when possible.
  </p>
</section>

<section>
  <h2>Gradual Upgrades via Warnings</h2>
  <p>
    Development builds include helpful warnings that prepare you for breaking changes. If your app has no warnings on the latest release, it should be compatible with the next major release.
  </p>
  <p>
    Development warnings don’t affect production behavior, ensuring consistent runtime between development and production builds.
  </p>
</section>

<section>
  <h2>What Counts as a Breaking Change?</h2>
  <p>We don’t bump the major version number for changes to:</p>
  <ul>
    <li>Development warnings — they don’t affect production.</li>
    <li>APIs starting with <code>unstable_</code> — these are experimental.</li>
    <li>Alpha and Canary versions — APIs may change before stable release.</li>
    <li>Undocumented APIs and internal data structures like <code>__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED</code>.</li>
  </ul>
  <p>
    This policy allows us to avoid unnecessary major version bumps while still making progress. However, we still provide migration paths for changes that may impact the community.
  </p>
</section>

<section>
  <h2>If a Minor Release Includes No New Features, Why Isn’t It a Patch?</h2>
  <p>
    Semver allows a minor version to be used even if it doesn’t introduce features. If a release includes non-essential changes like internal refactors, performance improvements, or minor bugfixes, we use a minor version.
  </p>
  <p>
    Patch releases are reserved for the most critical bugs and security issues because they’re expected to be extremely stable and safe to adopt.
  </p>
</section>

        </div>
  )
}

export default Versioningpolicy