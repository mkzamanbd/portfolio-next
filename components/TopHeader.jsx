import React from 'react'
import MyImage from './../public/images/zaman.png'

export default function TopHeader() {
    return (
        <header className="header__hd">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="external__links pl-0 pt-3 d-none d-md-block">
                            <li className="d-inline-block pr-3"> <a href="https://github.com/zamanz">-Github</a> </li>
                            <li className="d-inline-block pr-3"> <a href="https://www.facebook/kzaman.me">-Facebook</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="content_hd">
                            <h2 className="brand__name">K A M R U Z Z A M A N</h2>
                            <p className="caption__text">Web & Android Application Developer</p>
                            <div className="d-none d-md-block">
                                <h2 className="slug__title mb-4"> <span>Building</span> <br/> User Centric <br/> <span>Applications</span> </h2>
                                <p className="paragraph__text">Passionate and Creative for developing new products thats <br/> helpful for you and me...</p>
                                <a href="#portfolio" className="btn btn-outline-light">View Portfolio</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img className="profile__hd ml-auto" src={MyImage.src} loading="lazy" alt="zaman" />
                    </div>

                    <div className="col-sm-12">
                        <ul className="external__links__center text-center mt-3 pl-0 pt-3 d-md-none">
                            <li className="d-inline-block pr-3"> <a href="https://www.linkedin.com/in/zamanz">-LinkedIn</a> </li>
                            <li className="d-inline-block pr-3"> <a href="https://www.behance.net/zamanz">-Facebook</a> </li>
                            <li className="d-inline-block pr-3"> <a href="https://github.com/zamanz">-Github</a> </li>
                        </ul>
                        <div className="text-center mt-3 d-md-none">
                            <a href="#portfolio" className="btn btn-primary">View Portfolio</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
