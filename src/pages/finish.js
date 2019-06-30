import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

let URL = "https://whya11y.netlify.com"
if (typeof window !== undefined) {
  URL = window.location.origin
}

const IndexPage = () => {
  const isShareApiSupported =
    typeof navigator !== undefined && !!navigator.share

  function shareHandler() {
    if (navigator.share) {
      navigator.share({
        title: "Introduction to Accessibility",
        text: 'Check out "Introduction to Accessibility"',
        url: "https://whya11y.netlify.com",
      })
    }
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
        In the past chapters, you went through some extremely unusable examples
        of web content. The motive of those examples was two-fold:
      </p>
      <ol>
        <li>
          To display few ways in which websites are generally found
          inaccessible.
        </li>
        <li>
          To bring-forth the fact that what you find okay for yourself, can be
          inaccessible to someone else. So the best we can do to make our
          websites accessible to most people is -{" "}
          <mark>Follow the recommended guidelines</mark>.
        </li>
      </ol>

      <p>
        Hope it was a learning experience for you. If it was, please pass this
        on to every other developer & designer you know.
      </p>

      <p style={{ textAlign: "center" }}>
        <button onClick={copyLink} style={shareLinkStyles}>
          Copy link{isLinkCopied ? " (copied)" : null}
        </button>
        {!isShareApiSupported && (
          <a
            href={`http://twitter.com/share?url=${URL}&text=Introduction to Web Accessibility&hashtags=accessibility,a11y&via=chinchang457`}
            target="_blank"
            rel="external noopener noreferrer"
            style={shareLinkStyles}
          >
            Tweet!
          </a>
        )}
        {isShareApiSupported && (
          <button onClick={shareHandler} style={shareLinkStyles}>
            Share
          </button>
        )}
      </p>
    </Layout>
  )
}

export default IndexPage
