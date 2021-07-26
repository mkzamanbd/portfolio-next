import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import biggapti from './../public/images/portfolio/biggapti.jpg'
import school from './../public/images/portfolio/udoy-school.jpg'
import itc from './../public/images/portfolio/itc.webp'
import folmul from './../public/images/portfolio/folmul.webp'
import maxsop from './../public/images/portfolio/maxsop.webp'


export default function Portfolio() {
    const prevIcon = <span className="fa fa-long-arrow-left"/>
    const nextIcon = <span className="fa fa-long-arrow-right"/>
    return (
        <section id="portfolio" className="portfolio__area">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <p className="lead__text mb-0">My work</p>
                        <h3 className="title__grey"><span>Portfolio</span></h3>
                        <p className="section__text">I Successfully Completed 40+ Website Projects With To My
                            Projects.Eriences. My Clients Very Happy To My Projects.</p>

                        <Carousel prevIcon={prevIcon} nextIcon={nextIcon} indicators={false}>
                            <Carousel.Item>
                                <img className="gallery__img lazyload" src={biggapti.src} loading="lazy" alt="#" />
                                <div className="project__desc" style={{backgroundColor: "#ffaa78"}}>
                                    <h5 className="project__title">Biggapti</h5>
                                    <p className="project__details">Biggapti is the best and trusted classified
                                        marketplace in Bangladesh. Biggapti, the best of its kind...</p>
                                    <ul className="pl-0">
                                        <li className="d-inline-block">-Laravel</li>
                                        <li className="d-inline-block">-Nuxt JS</li>
                                        <li className="d-inline-block">-Vuetify</li>
                                    </ul>
                                    <a className="ext__link" href="https://biggapti.com" >Website Link</a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="gallery__img lazyload" src={school.src} loading="lazy" alt="#" />
                                <div className="project__desc" style={{backgroundColor: "#8fdb93"}}>
                                    <h5>Udoy School</h5>
                                    <p className="project__details">Started from Pick up and dine-in. Over the
                                        years, we added delivery to our services due to the trend and consumer
                                        requests.</p>
                                    <ul className="pl-0">
                                        <li className="d-inline-block">-Vue JS</li>
                                        <li className="d-inline-block">-Bootstrap4</li>
                                        <li className="d-inline-block">-Laravel</li>
                                    </ul>
                                    <a className="ext__link" href="http://pizzahouseusa.com">Website Link</a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="gallery__img lazyload" src={itc.src} loading="lazy" alt="#" />
                                <div className="project__desc" style={{backgroundColor: "#D6E9F7"}}>
                                    <h5>{'I\'M'} THE CHEF TOO!</h5>
                                    <p className="project__details">Blending food, stem & the arts into
                                        educational fun. <br /> Kids educational website I created sketch and
                                        designed this UI/UX by the instruction of project owner. This is a
                                        freelancing project for me</p>
                                    <ul className="pl-0">
                                        <li className="d-inline-block">-Adobe XD</li>
                                        <li className="d-inline-block">-Adobe Photoshop</li>
                                    </ul>
                                    <a className="ext__link" href="https://imthecheftoo.com" target="_new" rel="noopener">Website Link</a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="gallery__img lazyload" src={folmul.src} loading="lazy" alt="#" />
                                <div className="project__desc" style={{backgroundColor: "#8DD9E6"}}>
                                    <h5>Folmul</h5>
                                    <p className="project__details">Local market fruits suppliyer & products
                                        price showcase for customers who will get updated price list about each
                                        products.</p>
                                    <ul className="pl-0">
                                        <li className="d-inline-block">-HTML5</li>
                                        <li className="d-inline-block">-Boostrap 4</li>
                                        <li className="d-inline-block">-PHP</li>
                                        <li className="d-inline-block">-MySQL</li>
                                    </ul>
                                    <a className="ext__link" href="https://www.behance.net/gallery/62950715/Fruits-Web-Showcase">Website Link</a>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img className="gallery__img lazyload" src={maxsop.src} loading="lazy" alt="#" />
                                <div className="project__desc" style={{backgroundColor: "#B4E1FF"}}>
                                    <h5>Maxsop</h5>
                                    <p className="project__details">Services web design, web development,
                                        research, custom application, android apps and digital marketing</p>
                                    <ul className="pl-0">
                                        <li className="d-inline-block">-HTML5</li>
                                        <li className="d-inline-block">-Boostrap 4</li>
                                        <li className="d-inline-block">-PHP</li>
                                        <li className="d-inline-block">-MySQL</li>
                                    </ul>
                                    <a className="ext__link" href="https://maxsop.com" target="_new"
                                       rel="noopener">Website Link</a>
                                </div>
                            </Carousel.Item>

                        </Carousel>

                    </div>

                </div>
            </div>
        </section>
    )
}
