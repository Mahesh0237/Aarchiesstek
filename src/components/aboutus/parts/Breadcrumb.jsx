import React from 'react'

function Breadcrumb() {
    return (
        <section className="breadcrumbs-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumb"><a href="/">Home</a>
                            <span>&gt;</span> <a href="/aboutus">About</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb