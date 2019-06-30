import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { PrimaryLink } from "../components/common"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <p>
      Here is how this goes: In the following screens, you will be shown or
      asked to do something. And then, you'll be asked a question. Answer the
      question honestly, and hopefully by the end of this journey, you'll have a
      grasp of what Accessibility is.
    </p>

    <p>Sounds Good?</p>

    <p style={{ textAlign: "center" }}>
      <PrimaryLink to="/chapter-1/">Yes, lets go!</PrimaryLink>
    </p>
  </Layout>
)

export default IndexPage
