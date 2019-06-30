import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Button,
  BlockQuote,
  Nav,
  Question,
  ActivityBox,
} from "../components/common"

const Chapter1 = () => {
  const [userResponse, setUserResponse] = useState()
  return (
    <Layout>
      <SEO title="Page two" />
      {userResponse === undefined ? (
        <section class="question-area">
          <Question>Can you read the text in the below box easily?</Question>
          <ActivityBox>
            <p style={{ fontSize: "8px" }}>"I am a very small text"</p>
          </ActivityBox>

          <Button onClick={() => setUserResponse(false)}>
            Yes, no problem!
          </Button>
          <Button onClick={() => setUserResponse(true)}>
            Not easy to read it
          </Button>
        </section>
      ) : null}

      {userResponse && (
        <section class="explanation">
          <h1>Resize text</h1>

          <p>
            Exactly! This is because the font size of text is very less small.{" "}
            <mark>
              Users of the Internet have varying eye sight levels (due to
              injury, disease or age factor) and it's important to have a decent
              font size so that everyone can read your website without strain.
            </mark>
          </p>

          <p>
            Browsers come at with a default font size of <strong>16px</strong>.
            We should try to not go below that at least. Take 16px as your
            smallest base and build your text hierarchy upwards.
          </p>

          <p>
            At the very minimum set your font sizes in <code>em</code> unit so
            that users can zoom in your website to increase font sizes.
          </p>

          <BlockQuote
            authorLink="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html"
            authorLabel="w3.org"
          >
            Except for captions and images of text, text can be resized without
            assistive technology up to 200 percent without loss of content or
            functionality.
          </BlockQuote>

          <a href="https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html">
            Read more about "Resize texts".
          </a>
        </section>
      )}

      {userResponse !== undefined && <Nav nextLink="/chapter-2/" />}
    </Layout>
  )
}

export default Chapter1
