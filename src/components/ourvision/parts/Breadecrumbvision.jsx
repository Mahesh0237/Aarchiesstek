import React from 'react'
import { IconChevronRight } from '@tabler/icons-react'
function Breadecrumbvision() {
    return (
        <section className="breadcrumbs-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb"><a href="/">Home <IconChevronRight size={18} /></a>
                            <a href="/aboutus">About <IconChevronRight size={18} /></a>  <a href="/ourvision">Our Vision</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadecrumbvision