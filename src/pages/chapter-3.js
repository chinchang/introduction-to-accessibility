import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  BlockQuote,
  Nav,
  Question,
  ClickOrTap,
} from "../components/common"

const Chapter1 = () => {
  const [userResponse, setUserResponse] = useState()
  return (
    <Layout>
      <SEO title="Page two" />
      {userResponse === undefined ? (
        <section className="question-area">
          <p>Check the checkbox below.</p>
          <input type="checkbox"></input>
          <label>Check me please</label>

          <Question>Were you able to click the checkbox easily?</Question>

          <Button onClick={() => setUserResponse(false)}>
            Yes, no problem!
          </Button>
          <Button onClick={() => setUserResponse(true)}>
            It's difficult to <ClickOrTap />.
          </Button>
        </section>
      ) : null}

      {userResponse && (
        <section className="explanation">
          <h1>Labelled Form Controls</h1>

          <p>
            Yes, I know the checkbox is too small to be clicked. A normal size
            checkbox could have been just fine for you to click easily. But
            important thing to understand here is that even the normal size
            checkbox can be difficult to click for some people. Specially the
            ones with weak motor skills i.e. Ability to do a pre-determined
            movement with maximum certainity.
          </p>

          <p>
            This is one of the reasons why there is a recommended guideline to
            associate a <code>&lt;label&gt;</code> element with the{" "}
            <code>&lt;input&gt;</code> element (with all form controls in
            general). This makes the label also a clickable part of the form
            control. So you don't have to pin-point the form control.
          </p>

          <BlockQuote
            authorLink="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
            authorLabel="w3.org"
          >
            Present instructions or labels that identify the controls in a form
            so that users know what input data is expected.
          </BlockQuote>

          <a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html">
            Read more about "Labelled Form Controls".
          </a>

          <p>
            Again, note that this is just one of the reasons why form controls
            should be correctly labelled. There are more benefits to it which
            you can read at above link.
          </p>
        </section>
      )}

      <Nav nextLink="/chapter-2/" />
    </Layout>
  )
}

export default Chapter1
