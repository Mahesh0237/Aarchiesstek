import { Button } from '@mantine/core'
import React from 'react'

function Helpbox() {
    return (
        <section className="help-box-section reveal active">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h2 className="mt-0">How can we help?</h2>
                        <p> <a className="btn btn-primary explore-btn" href="/contactus"><span>Contact us</span></a></p>
                        {/* <Button variant="gradient" color="rgba(255, 100, 3, 1)" size="xl" radius="xl" component='a' href='/contactus'>Contact Us</Button> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Helpbox