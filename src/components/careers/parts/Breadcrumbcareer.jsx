import { IconChevronRight } from '@tabler/icons-react'
import React from 'react'

function Breadcrumbcareer() {
    return (
        <section className="breadcrumbs-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb">
                            <a href="/">Home <IconChevronRight size={18} /></a>
                            <a href="/careers">Careers</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumbcareer