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
  const chapter = 3

  return (
    <Layout>
      <SEO title={`Chapter ${chapter}`} />
      <ChapterLabel chapter={chapter} />

      {userResponse === undefined ? (
        <section className="question-area">
          <Question>
            Can you easily understand the text in the box below?
          </Question>

          <ActivityBox>
            Anyone who feels that if so many more students whom we haven’t
            actually admitted are sitting in on the course than ones we have
            that the room had to be changed, then probably auditors will have to
            be excluded, is likely to agree that the curriculum needs revision.
          </ActivityBox>

          <Button onClick={() => setUserResponse(true)}>
            No
          </Button>
        </section>
      ) : null}

      <ExplanationView isVisible={userResponse}>
        <h1>Make text content readable and understandable.</h1>

        <p>
          The sentence you just read is a highly compounded. It's complexity requires the reader to put 
in a lot of mental focus to figure out the
          overall meaning of the sentence. It might still be understandable by
          many people. But{" "}
          <mark>
            there are people with disabilities, including reading disabilities,
            even among highly educated users with specialized knowledge of the
            subject matter
          </mark>
          . It is always possible to accommodate these users by making the text
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
          Read more about "Reading Level" from w3.
        </a>

        <p>In short,</p>
        <ul>
          <li>Avoid difficult and less common words</li>
          <li>Write short sentences</li>
          <li>Don't use more than two conjuctions in a sentence</li>
          <li>Bullet points help wherever applicable</li>
        </ul>
      </ExplanationView>

      {userResponse !== undefined && <Nav chapter={chapter} />}
    </Layout>
  )
}

export default Page
