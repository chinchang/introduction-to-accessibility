import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  BlockQuote,
  Nav,
  Question,
  ActivityBox,
  ExplanationView,
} from "../components/common"

const Chapter1 = () => {
  const [userResponse, setUserResponse] = useState()
  return (
    <Layout>
      <SEO title="Page two" />
      {userResponse === undefined ? (
        <section class="question-area">
          <Question>
            There is a input field in the box below. It has a value "Alladin".
            Do you know what was asked for which the value is filled as
            "Alladin"?
          </Question>
          <ActivityBox>
            <input placeholder="Your favourite movie" value="Alladin"></input>
          </ActivityBox>

          <Button onClick={() => setUserResponse(true)}>I can guess</Button>
          <Button onClick={() => setUserResponse(true)}>No</Button>
        </section>
      ) : null}

      <ExplanationView isVisible={userResponse}>
        <h1>Labels or Instructions</h1>

        <p>
          If you were to clear the filled value in the input field you just saw,
          you'll find that the instruction about what to fill in the input does
          exist. Unfortunately, the developer decided to put it as the
          placeholder of the input.{" "}
          <mark>
            Placeholders vanish as soon as any text is entered in the input
            field
          </mark>
          .
        </p>
        <p>
          What's wrong in it? Nowadays many input fields in the{" "}
          <mark>
            forms are auto-filled by browsers for us. In such a situation, if
            someone was to cross-check if the filled value is appropriate what
            they really wanted to put, they have no way to know what's really
            asked in a particular input field!
          </mark>{" "}
          Same issue also applies to a user with short memory who started
          filling the form, and then wants to verify the fields mid-way. So
          always label your input fields such that the label/instruction is
          accessible to the user at all times.
        </p>

        <BlockQuote
          authorLink="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html"
          authorLabel="w3.org"
        >
          Present instructions or labels that identify the controls in a form so
          that users know what input data is expected.
        </BlockQuote>

        <a href="https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html">
          Read more about "Labels or Instructions".
        </a>
      </ExplanationView>

      {userResponse !== undefined && <Nav nextLink="/chapter-6/" />}
    </Layout>
  )
}

export default Chapter1
