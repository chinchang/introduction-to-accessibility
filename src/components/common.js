import React from "react"
import { Link } from "gatsby"

export function Button({ onClick, children }) {
  return (
    <button type="button" class="btn" onClick={onClick}>
      {children}
    </button>
  )
}

export function BlockQuote({ authorLabel, authorLink, children }) {
  return (
    <blockquote class="blockquote">
      {children}
      <div class="blockquote__author">
        - <a href={authorLink}>{authorLabel}</a>
      </div>
    </blockquote>
  )
}

export function Nav({ nextLink }) {
  return (
    <nav class="decorative-top site-nav">
      <Link to="/">Go back to the homepage</Link>

      <Link to={nextLink}>Next Chapter</Link>
    </nav>
  )
}

export function Question({ children }) {
  return <p class="question">{children}</p>
}
