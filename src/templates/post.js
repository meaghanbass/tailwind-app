import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SubjectWrapper from "../components/subject-wrapper"
import SubjectNav from "../components/subject-nav"
import SubjectContent from "../components/subject-content"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <React.Fragment>
      <SubjectWrapper>
        
        <SubjectContent>
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </SubjectContent>
      </SubjectWrapper>
    </React.Fragment>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`