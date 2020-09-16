---
title: "Markup: Syntax Highlighting"
description: "Post displaying the various ways of highlighting code in Markdown."
tags:
  - code
  - syntax highlighting
  - markdown
image: "https://source.unsplash.com/cvBBO4PzWPg/1600x900"
---

Syntax highlighting is a feature that displays source code, in different colors and fonts according to the category of terms. This feature facilitates writing in a structured language such as a programming language or a markup language as both structures and syntax errors are visually distinct. Highlighting does not affect the meaning of the text itself; it is intended only for human readers.[^1]

[^1]: <http://en.wikipedia.org/wiki/Syntax_highlighting>

### GFM Code Blocks

GitHub Flavored Markdown [fenced code blocks](https://help.github.com/articles/creating-and-highlighting-code-blocks/) are supported. Ifyou want to modify styling and highlight colors, edit `gatsby-browser.js` to import another `prism` theme.

```css
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
```

```scss
@import "../../scss/variables";

.tags {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  padding: 0;
  font-size: $tags-size;

  &__item {
    display: inline-block;
    padding: 15px 40px 15px 0;
    overflow: hidden;
  }
}
```

```jsx
import styles from "./tags.module.scss"

const Tags = ({ tags }) => {
  return (
    <ul className={styles["tags"]}>
      {tags &&
        tags.map(tag => (
          <li key={tag.fieldValue} className={styles["tags__item"]}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              #{tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
    </ul>
  )
}

export default Tags
```

### Code Blocks in Lists

Indentation matters. Be sure the indent of the code block aligns with the first non-space character after the list item marker (e.g., `1.`). Usually this will mean indenting 3 spaces instead of 4.

1. Do step 1.
2. Now do this:

   ```ruby
   def print_hi(name)
     puts "Hi, #{name}"
   end
   print_hi('Tom')
   #=> prints 'Hi, Tom' to STDOUT.
   ```

3. Now you can do this.

### GitHub Gist Embed

~~An example of a Gist embed below.~~ **NOT SUPPORTED YET.**

{% gist e813c2560b0f1ecc9f5d pacman.patch %}
