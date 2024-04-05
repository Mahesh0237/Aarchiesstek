import React from 'react'
import Aboutsection from './parts/Aboutsection'
import Whytrust from './parts/Whytrust'
import Corevalues from './parts/Corevalues'

function Aboutuswrapper() {
    return (
        <>
            <div className="page-wrapper">
                <div className="about-us-page-wrapper">
                    <div className="article-wrapper post-65 page type-page status-publish has-post-thumbnail hentry">
                        <div className="article clearfix">
                            <Aboutsection />
                            <Whytrust />
                            <Corevalues />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Aboutuswrapper