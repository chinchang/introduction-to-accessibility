import React from "react"
import { Link } from "gatsby"
import { TransitionGroup, CSSTransition } from "react-transition-group"

let isTouchDevice = false
if (typeof document !== `undefined`) {
  isTouchDevice = "ontouchstart" in document.documentElement
}
export { isTouchDevice }
export const NUM_CHAPTERS = 6

export function Button({ onClick, children }) {
  return (
    <button type="button" className="btn" onClick={onClick}>
      {children}
    </button>
  )
}

export function BlockQuote({ authorLabel, authorLink, children }) {
  return (
    <blockquote className="blockquote">
      {children}
      <div className="blockquote__author">
        - <a href={authorLink}>{authorLabel}</a>
      </div>
    </blockquote>
  )
}

export function Nav({ chapter }) {
  return (
    <nav className="decorative-top site-nav">
      {chapter === 1 ? (
        <Link to="/">Back to the home</Link>
      ) : (
        <Link to={`/chapter-${chapter - 1}`}>Previous Chapter</Link>
      )}

      <span>
        Chapter {chapter} of {NUM_CHAPTERS}
      </span>

      {chapter === NUM_CHAPTERS ? (
        <PrimaryLink to="/finish/">Finish</PrimaryLink>
      ) : (
        <PrimaryLink to={`/chapter-${chapter + 1}`}>Next Chapter</PrimaryLink>
      )}
    </nav>
  )
}

export function Question({ children }) {
  return <p className="question">{children}</p>
}

export function PrimaryLink({ children, ...props }) {
  const isExternal = props.to.match(/http/)
  if (isExternal) {
    return (
      <a class="link--primary" href={props.href}>
        {children}
      </a>
    )
  }
  return (
    <Link class="link--primary" {...props}>
      {children}
    </Link>
  )
}

export function ClickOrTap() {
  return isTouchDevice ? "tap" : "click"
}

export function ActivityBox({ children }) {
  return <div class="activity-box">{children}</div>
}

export function ExplanationView({ children, isVisible }) {
  return (
    <TransitionGroup component={null}>
      {isVisible && (
        <CSSTransition classNames="view" timeout={300}>
          <section class="explanation">{children}</section>
        </CSSTransition>
      )}
    </TransitionGroup>
  )
}

export function ChapterLabel({ chapter }) {
  return (
    <div class="chapter-tag">
      Chapter {chapter} of {NUM_CHAPTERS}
    </div>
  )
}
