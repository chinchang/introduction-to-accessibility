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
  const chapter = 1

  return (
    <Layout>
      <SEO title={`Chapter ${chapter}`} />
      <ChapterLabel chapter={chapter} />

      {userResponse === undefined ? (
        <section class="question-area">
          <Question>Can you easily read the text in the box below?</Question>
          <ActivityBox>
            <p style={{ fontSize: "8px" }}>"This text has a very small font size."</p>
          </ActivityBox>

          <Button onClick={() => setUserResponse(true)}>
            No
          </Button>
        </section>
      ) : null}

      <ExplanationView isVisible={userResponse}>
        <h1>Resize text</h1>

        <p>
          Exactly! This is because at 8px, the font size of text is very small.{" "}
          <mark>
            Users of the Internet have varying eye sight levels (due to injury,
            disease or age factor) and it's important to display text in a font size
            that is large enough so that everyone can read your website without straining.
          </mark>
        </p>

        <p>
          Browsers come at with a default font size of <strong>16px</strong>. We
          should try to not go below that at least. Take 16px as your smallest
          base and build your text hierarchy upwards.
        </p>

        <p>
          A recommendation: set your font sizes using the <code>em</code> unit instead of the <code>px</code> unit so
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
          Read more about "Resize texts" from w3.
        </a>
      </ExplanationView>

      {userResponse !== undefined && <Nav chapter={chapter} />}
    </Layout>
  )
}

export default Page
