import { IconCircleChevronRight } from '@tabler/icons-react'
import React from 'react'

function Service({ title, image, info }) {
    return (
        <div className="article-wrapper post-5615 post type-post status-publish format-standard has-post-thumbnail hentry category-talent">
            <a href="#">
                <figure>
                    <img src={image} alt={title} className="img-rounded img-responsive center-block featured wp-post-image" />

                </figure>

                <div className="post-list-content">
                    <div className="article clearfix">
                        <h3 className="card-title" style={{ color: "white" }}>{title}</h3>
                        <p style={{ color: "white" }}>{info}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Service