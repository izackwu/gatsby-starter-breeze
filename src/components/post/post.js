import { FaRegCalendarAlt, FaTags } from "react-icons/fa"

import { Link } from "gatsby"
import React from "react"
import styles from "./post.module.scss"

const _ = require("lodash")

const Post = ({ post }) => {
  return (
    <article>
      <header className={styles["header"]}>
        {post.frontmatter.image && (
          <div
            className={styles["header__image"]}
            style={{ backgroundImage: `url(${post.frontmatter.image})` }}
          ></div>
        )}
        <div className={styles["header__info"]}>
          <h1 className={styles["header__info__title"]}>
            {post.frontmatter.title}
          </h1>
          <span className={styles["header__info__date"]}>
            <FaRegCalendarAlt className={styles["icon"]} />
            {post.fields.date}
          </span>
          {post.frontmatter.tags && (
            <span className={styles["header__info__tags"]}>
              <FaTags className={styles["icon"]} />
              <ol>
                {post.frontmatter.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tags/${_.kebabCase(tag)}/`}>{tag}</Link>
                  </li>
                ))}
              </ol>
            </span>
          )}
        </div>
      </header>
      <section
        className={styles["content"]}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </article>
  )
}

export default Post
