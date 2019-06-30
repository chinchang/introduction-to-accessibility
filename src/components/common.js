import React from "react"
import { Link } from "gatsby"
import { TransitionGroup, CSSTransition } from "react-transition-group"

let isTouchDevice = false
if (typeof document !== `undefined`) {
  isTouchDevice = "ontouchstart" in document.documentElement
}

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

export function Nav({ nextLink }) {
  return (
    <nav className="decorative-top site-nav">
      <Link to="/">Go back to the homepage</Link>

      <PrimaryLink to={nextLink}>Next Chapter</PrimaryLink>
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
