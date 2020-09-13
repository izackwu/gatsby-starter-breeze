import React from "react"
import styles from "./postlist.module.scss"
import { Link } from "gatsby"

const PostList = ({ posts }) => {
  console.log(styles)
  return (
    <div className={styles["postlist"]}>
      {posts.map(({ node }) => (
        <div className={styles["postlist__item_wrapper"]}>
          <Link to={node.fields.slug} className={styles["item"]}>
            <div className={styles["item__info"]}>
              <div className={styles["item__info__title"]}>
                {node.frontmatter.title}
              </div>
              <div className={styles["item__info__description"]}>
                {node.frontmatter.description || node.excerpt}
              </div>
              <div className={styles["item__info__date"]}>
                {node.fields.date}
              </div>
            </div>
            {node.frontmatter.image && (
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
