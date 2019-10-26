import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `purple` }}>
    <div class="tere"><Link to="/contact/">Contact</Link></div>
    <div><Link to="/about-css-modules/">Css modules</Link></div >

    <Header headerText="Hello Gatsby!" />
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)
