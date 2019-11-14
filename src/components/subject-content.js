import React from "react"
import { graphql } from "gatsby"

function SubjectContent({ children }) {
    return (
        <div id="subject-content" className="flex flex-col md:justify-center md:w-full"> 
            {children}
        </div>
        );
    }
    
    // SubjectWrapper.propTypes = {
    //     children: PropTypes.node.isRequired
    // };
    
export default SubjectContent;