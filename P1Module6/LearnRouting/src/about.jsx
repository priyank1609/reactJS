import React, { lazy, Suspense, useState } from 'react'
const AboutMe = lazy(() => import('./about-me.jsx'))

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <Suspense fallback={<p>Loading from parent 1</p>}>
      <div>
        <h1>About Us</h1>
        <button onClick={() => setShow((prev) => !prev)} className='bg-amber-300 cursor-pointer'>Toggle About Me</button>
        <Suspense fallback={<div>Loading...</div>}>
          {show && <AboutMe />}
        </Suspense>
      </div>
    </Suspense>
  )
}

export default About
