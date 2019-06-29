import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p>
      Here is how this goes: In the following screens, you will be shown or
      asked to do something. And then asked a question. Answer the question
      honestly, and hopefully by the end of this journey, you'll have a grasp of
      what Accessibility is.
    </p>

    <p>Sounds Good?</p>
    <Link to="/chapter-1/">Yes, lets go!</Link>
  </Layout>
)

export default IndexPage
