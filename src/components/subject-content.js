import React from "react"
import { graphql } from "gatsby"
import SubjectNav from "../components/subject-nav"

function SubjectContent({ children }) {
    return (
        <React.Fragment>
            <div id="subject-content" className="relative flex flex-col md:justify-center md:w-auto"> 
                {children}
            </div>
        </React.Fragment>
        );
    }
    
    // SubjectWrapper.propTypes = {
    //     children: PropTypes.node.isRequired
    // };
    
export default SubjectContent;