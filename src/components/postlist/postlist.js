import { Link } from "gatsby"
import React from "react"
import styles from "./postlist.module.scss"

const PostList = ({ posts, compact }) => {
  return (
    <div className={styles["postlist"]}>
      {posts.map(({ node }) => (
        <div
          className={styles["postlist__item_wrapper"]}
          key={node.fields.slug}
        >
          <Link to={node.fields.slug} className={styles["item"]}>
            <div
              className={
                compact ? styles["item__info_compact"] : styles["item__info"]
              }
            >
              <h2
                className={
                  compact
                    ? styles["item__info_compact__title"]
                    : styles["item__info__title"]
                }
              >
                {node.frontmatter.title}
              </h2>
              {!compact && (
                <div className={styles["item__info__description"]}>
                  {node.frontmatter.description || node.excerpt}
                </div>
              )}
              <div
                className={
                  compact
                    ? styles["item__info_compact__date"]
                    : styles["item__info__date"]
                }
              >
                {node.fields.date}
              </div>
            </div>
            {!compact && node.frontmatter.image && (
              <div
                className={styles["item__image"]}
                style={{ backgroundImage: `url(${node.frontmatter.image})` }}
              ></div>
            )}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostList
