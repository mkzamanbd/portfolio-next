import React from 'react'

export default function AboutInfo() {
    return (
        <section className="about__information">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <p className="lead__text mb-0">About me</p>
                        <h3 className="title__grey"><span>{'What\'s'} I Do</span></h3>
                        <h1 className="section__title">Value More On Quality</h1>
                        <p className="section__text text-muted"> My main principle is to put my heart in every project i
                            make. This is the secret that allows to get the best result. I believe my strong skills are
                            my creativeness and punctuality. My #1 goal will always be to meet your needs and deadline.
                            When working on a new project, I like to speak with the client, so that I can have a clear
                            understanding of his/her needs and vision of the project.</p>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="block__item">
                                    <img className="block__img" src="/images/mobile-app.webp" strategy="lazyOnload" alt="dev" />
                                        <span className="d-block">Backend Development</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block__item">
                                    <img className="block__img" src="/images/web-design.webp" strategy="lazyOnload" alt="dev" />
                                        <span className="d-block">Frontend Development</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="block__item">
                                    <img className="block__img" src="/images/software.webp" strategy="lazyOnload" alt="dev" />
                                        <span className="d-block">Testing & Debug</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12">
                        <div className="site__highlight">
                            <div className="highlighted__text">
                                <img src="/images/pencil.svg" alt="pencil"/>
                                <h5 className="subtitle text-white mb-3">Creativity is the key</h5>
                                <p className="section__text text-white"><small> To Design Is Much More Than Simply To
                                    Assemble, To Order, Or Even To Edit: It Is To Add Value And Meaning, To Illuminate,
                                    To Simplify, To Clzamany, To Modify, To Dignify, To Dramatize, To Persuade, And
                                    Perhaps Even To Amuse. To Design Is To Transform Prose Into Poetry.”</small> <span
                                    className="d-block">–Paul Rand</span></p>
                            </div>
                            <img className="highlights__img" src="/images/about.webp" strategy="lazyOnload" alt="highlights__img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
