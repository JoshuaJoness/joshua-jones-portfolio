import * as React from "react"
import About from "./components/About";
import Splash from "./components/Splash";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

import '../styles/index.css'
import '../styles/typography.css'

export default function Home() {
  return (
      <main>
          <Splash />
          <About />
          <Portfolio />
          <Resume />
          <Contact />
          {/* <Canvas /> */}
      </main>
    )
}
