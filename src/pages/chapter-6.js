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
  ClickOrTap,
  ChapterLabel,
} from "../components/common"

const Page = () => {
  const [userResponse, setUserResponse] = useState()
  const [shouldShowQuestion, setShouldShowQuestion] = useState(false)
  const [notification, setNotification] = useState("")
  const chapter = 6

  function showNotification() {
    setNotification(
      "Clicked was successfully processed! Note: The click that you made does not do anything."
    )
    setTimeout(() => {
      setNotification("")
      setShouldShowQuestion(true)
    }, 650)
  }

  return (
    <Layout>
      <SEO title={`Chapter ${chapter}`} />
      <ChapterLabel chapter={chapter} />

      {userResponse === undefined ? (
        <section class="question-area">
          <p>
            Press the button in the box below and carefully read the
            notification that appears.
          </p>
          <ActivityBox>
            <Button onClick={showNotification}>
              <ClickOrTap /> me to see notification
            </Button>
            {notification && <p>{notification}</p>}
          </ActivityBox>
          {shouldShowQuestion && (
            <>
              <Question>
                Were you able to read the notification that showed after
                clicking the button?
              </Question>
              <Button onClick={() => setUserResponse(true)}>
                No
              </Button>
            </>
          )}
        </section>
      ) : null}

      <ExplanationView isVisible={userResponse}>
        <h1>Timing Adjustable</h1>

        <BlockQuote
          authorLink="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html"
          authorLabel="w3.org"
        >
          Ensure that users with disabilities are given adequate time to
          interact with Web content whenever possible. People with disabilities
          such as blindness, low vision, dexterity impairments, and cognitive
          limitations may require more time to read content or to perform
          functions such as filling out on-line forms.
        </BlockQuote>

        <a href="https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html">
          Read more about "Timing Adjustable" from w3.
        </a>

        <p>
          Websites are filled with things like alerts and notifications that
          show for a short duration and then go away. Here are few things you
          can do to make them more accessible:
        </p>
        <ol>
          <li>Make them stay longer.</li>
          <li>Show how much time is left before they go away.</li>
          <li>Pause their timer when hovered or focused.</li>
        </ol>
      </ExplanationView>

      {userResponse !== undefined && <Nav chapter={chapter} />}
    </Layout>
  )
}

export default Page
