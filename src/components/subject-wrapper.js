import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import SubjectNav from "./subject-nav"
import SubjectContent from "./subject-content"

function SubjectWrapper({ children }) {
    return (
        <Layout>
        <div id="subject-wrapper" className="flex flex-row font-sans min-h-screen text-gray-900"> 
            <SubjectNav>
                {children}
            </SubjectNav>

            <SubjectContent>
                {children}
            </SubjectContent>
        </div>
        </Layout>
        );
    }

export default SubjectWrapper;