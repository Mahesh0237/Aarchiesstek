import React from 'react'
import Ourvisionbanner from './parts/Ourvisionbanner'
import Breadecrumbvision from './parts/Breadecrumbvision'
import Typesofexp from './parts/Typesofexp'
import Experienceecosystem from './parts/Experienceecosystem'
import Buildingblockecosystem from './parts/Buildingblockecosystem'
import Ourvisionfortomarr from './parts/Ourvisionfortomarr'

function Ourvisionwrapper() {
    return (
        <>
            {/* <Ourvisionbanner /> */}
            <div className="page-wrapper">
                {/* <Breadecrumbvision /> */}
                <div className="about-us-page-wrapper">
                    <div className="article-wrapper post-312 page type-page status-publish has-post-thumbnail hentry">
                        <div className="article clearfix our-vision-page-wrapper">
                            <Typesofexp />
                           <Experienceecosystem/>
                            <Buildingblockecosystem/>
                            <Ourvisionfortomarr/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourvisionwrapper