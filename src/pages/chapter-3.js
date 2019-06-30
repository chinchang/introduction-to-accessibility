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
        <section className="question-area">
          <Question>
            Can you understand the text in the below box easily?
          </Question>

          <ActivityBox>
            Anyone who feels that if so many more students whom we haven’t
            actually admitted are sitting in on the course than ones we have
            that the room had to be changed, then probably auditors will have to
            be excluded, is likely to agree that the curriculum needs revision.
          </ActivityBox>

          <Button onClick={() => setUserResponse(false)}>
            Yes, no problem!
          </Button>
          <Button onClick={() => setUserResponse(true)}>
            It's difficult to understand.
          </Button>
        </section>
      ) : null}

      <ExplanationView isVisible={userResponse}>
        <h1>Make text content readable and understandable.</h1>

        <p>
          The sentence you just read is a highly compounded and complex sentence
          and requires the reader to put in extra mental focus to figure out the
          overall meaning of the sentence. It might still be understandable by
          many people. But{" "}
          <mark>
            there are people with disabilities, including reading disabilities,
            even among highly educated users with specialized knowledge of the
            subject matter
          </mark>
          . It may be possible to accommodate these users by making the text
          more readable.
        </p>

        <p>Here is the required guideline:</p>

        <BlockQuote
          authorLink="https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html"
          authorLabel="w3.org"
        >
          When text requires reading ability more advanced than the lower
          secondary education level after removal of proper names and titles,
          supplemental content, or a version that does not require reading
          ability more advanced than the lower secondary education level, is
          available.
        </BlockQuote>

        <a href="https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html">
          Read more about "Reading Level".
        </a>

        <p>In short,</p>
        <ul>
          <li>Avoid difficult and less common words</li>
          <li>Write short sentences</li>
          <li>Don't use more than two conjuctions in a sentence</li>
          <li>Bullet points help wherever applicable</li>
        </ul>
      </ExplanationView>

      {userResponse !== undefined && <Nav nextLink="/chapter-4/" />}
    </Layout>
  )
}

export default Chapter1
