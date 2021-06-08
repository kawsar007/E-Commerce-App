import React from 'react';
import './Showcase.css';

function Showcase() {
    return (
        <section className="showcase">
               <div className="container grid">
                    <div className="showcase-text">
                        <h1>Easier Development</h1>
                        <p>Deploy web apps of all kinds, from large scale enterprose APIs to static websites for individual. Fill out the form to try a demo of our platform</p>
                        <a href="/" className="btn btn-outline">Read More</a>
                    </div>

                    {/* <div className="showcase-form card"> */}
                         <img className="bannerLogo" src="images/logo3.png" alt=""/>

                    {/* </div> */}

                </div>
        </section>
            // <section className="showcase">
            //     <div className="container grid">
            //         <div className="showcase-text">
            //             <h1>Easier Development</h1>
            //             <p>Deploy web apps of all kinds, from large scale enterprose APIs to static websites for individual. Fill out the form to try a demo of our platform</p>
            //             <a href="features.html" className="btn btn-outline">Read More</a>
            //         </div>

            //         <div className="showcase-form card">
            //             <h2>Request a Demo</h2>
            //             <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
            //                 <input type="hidden" name="form-name" value="contact">
            //                 <p className="hidden">
            //                     <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            //                 </p>
            //                 <div className="form-control">
            //                     <input type="text" name="name" placeholder="Name" required>
            //                 </div>
            //                 <div classNameName="form-control">
            //                     <input type="text" name="company" placeholder="Company Name" required>
            //                 </div>
            //                 <div className="form-control">
            //                     <input type="email" name="email" placeholder="Email" required>
            //                 </div>
            //                 <input type="submit" value="Send" className="btn btn-primary" />
            //             </form>
            //         </div>
            //     </div>
            //    </section>
    )
}

export default Showcase;
