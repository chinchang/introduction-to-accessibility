import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from "../components/common"

let URL = "https://introtoaccessibility.com"
if (typeof window !== "undefined") {
  URL = window.location.origin
}

const IndexPage = () => {
  const isShareApiSupported =
    typeof navigator !== "undefined" && !!navigator.share

  function shareHandler() {
    navigator.share({
      title: "An interactive & practical introduction to Web Accessibility",
      text:
        'Check out an interactive & practical "Introduction to Web Accessibility"',
      url: URL,
    })
  }

  const [isLinkCopied, setIsLinkCopied] = useState(false)
  function copyLink() {
    const input = document.createElement("input")
    input.value = URL
    input.style.opacity = 0
    document.body.appendChild(input)
    input.select()
    document.execCommand("copy")
    document.body.removeChild(input)
    setIsLinkCopied(true)
  }

  const shareLinkStyles = { margin: "0 1rem" }
  return (
    <Layout>
      <SEO title="End" />

      <p>
        In the preceding chapters, you went through some extremely unusable examples
        of web content. The motivation of those examples was two-fold:
      </p>
      <ol>
        <li>
          To display few ways in which websites are generally found
          inaccessible.
        </li>
        <li>
          The goal of these examples was to demonstrate that what you find okay for yourself can be
          inaccessible for someone else. So the best we can do to make our
          websites accessible to most people is -{" "}
          <mark>
            Follow the{" "}
            <a href="https://www.w3.org/TR/WCAG21/" rel="external">
              recommended guidelines
            </a>
          </mark>
          .
        </li>
      </ol>

      <p>
        Hope it was a learning experience for you. If it was, please pass this
        on to every other developer, designer, marketer, any you know who works
        with websites. Let's make the Web a more accessible place!
      </p>

      <p style={{ textAlign: "center" }}>
        <Button onClick={copyLink} style={shareLinkStyles}>
          Copy link{isLinkCopied ? " (copied)" : null}
        </Button>
        {!isShareApiSupported && (
          <a
            href={`http://twitter.com/share?url=${URL}&text=An interactive & practical introduction to Web Accessibility&hashtags=accessibility,a11y&via=chinchang457`}
            target="_blank"
            rel="external noopener noreferrer"
            style={shareLinkStyles}
          >
            Tweet!
          </a>
        )}
        {isShareApiSupported && (
          <Button onClick={shareHandler} style={shareLinkStyles}>
            Share
          </Button>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage
