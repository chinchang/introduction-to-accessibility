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
  ChapterLabel,
} from "../components/common"

const Page = () => {
  const [userResponse, setUserResponse] = useState()
  const chapter = 2

  return (
    <Layout>
      <SEO title={`Chapter ${chapter}`} />
      <ChapterLabel chapter={chapter} />

      {userResponse === undefined ? (
        <section class="question-area">
          <Question>Can you read the text in the below box easily?</Question>
          <ActivityBox>
            <p style={{ margin: 0, fontSize: "2rem", color: "#eee" }}>
              "Read me now"
            </p>
          </ActivityBox>

          <Button onClick={() => setUserResponse(false)}>Yes</Button>
          <Button onClick={() => setUserResponse(true)}>
            Not easy to read it
          </Button>
        </section>
      ) : null}
      <ExplanationView isVisible={userResponse}>
        <h1>Color Contrast</h1>

        <p>
          Exactly! This is because the color contrast of the text is very less
          with respect to its background.{" "}
          <mark>
            Users of the Internet have varying eye sight levels and it's
            important to have a good contrast so that everyone can read your
            websites without strain
          </mark>
          .
        </p>

        <p>
          This is why there is a recommended guideline just to prevent this
          issue. It requires that,
        </p>

        <BlockQuote
          authorLink="https://www.w3.org/TR/WCAG21/#contrast-minimum"
          authorLabel="w3.org"
        >
          The visual presentation of text and images of text has a contrast
          ratio of at least 4.5:1.
        </BlockQuote>

        <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">
          Read more about Color contrast guidelines.
        </a>
      </ExplanationView>

      {userResponse !== undefined && <Nav chapter={chapter} />}
    </Layout>
  )
}

export default Page
