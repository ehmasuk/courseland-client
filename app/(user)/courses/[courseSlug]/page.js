import AddToCartBtn from "@/components/AddToCartBtn";
import { useFetch } from "@/hooks/useFetch";
import { Rate } from "antd";

import { Clock, Play, ShoppingBasket, Video } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

async function CoursDetails({ params }) {
    const course = await useFetch("/api/courses?slug=" + params.courseSlug);

    if (!course) {
        notFound();
    }

    return (
        <div>
            <div className="new-courses-details-page">
                <div className="top-hero-section container-fluid">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl">
                            <h2 className="course-title">{course?.title}</h2>
                            <p className="course-sub-title">{course?.description}</p>
                            <div className="course-rating">
                                <div className="ratings">
                                    4.0
                                    <Rate className="[&_*]:text-xs [&_*]:!text-orange-400 ml-3" value={4.5} />
                                </div>
                                <a className="new-course-common-links ml-2" href="#courses-ratings">
                                    (41 ratings)
                                </a>
                                <p className="count-student">3,351 students</p>
                            </div>
                            <p style={{ fontSize: 14 }}>
                                Created by{" "}
                                <a className="new-course-common-links" href="#">
                                    Antony lorings
                                </a>
                            </p>
                            <div className="lang-infos">
                                <p className="flex gap-2 items-center">
                                    <Clock size={14} /> 6 hours
                                </p>
                                <p className="flex gap-2 items-center">
                                    <Video size={16} /> 21 videos
                                </p>
                            </div>
                            {/* small screen price */}
                            <div className="small-screen-price-box">
                                <p>$14.99</p>
                                <button className="btn">Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="new-courses-left-side">
                    <div className="max-w-6xl mx-auto">
                        <div className="max-w-3xl">
                            {/* what you will learn section */}
                            <section class="what-learn-section">
                                <h3 class="description-common-title">What youll learn</h3>
                                <ul>
                                    <li>Dinner sign bark range made someone manner bet half dark lying wrote ago good strength day noted arrow week market space terrible sea practice</li>
                                    <li>Office carried get political old press active gulf team speed nor than speak feet cast combination stage safety bottle simply pilot drop largest provide</li>
                                    <li>Jet stems congress shut said state rear kept title save foreign cloud review unless proper up accident shinning object best tool sitting flies strip</li>
                                    <li>
                                        Distance mistake outline tropical accident home swept gulf public entire seems swung heard whistle herself camera barn return third wood see partly night shore
                                    </li>
                                    <li>
                                        Nervous effect happily baby two husband or angry sunlight conversation brought attempt express feel quickly given spread answer thou meat wife rope shade sale
                                    </li>
                                    <li>Favorite bell until market corn mental pool tax jump fog floor contain owner structure old mind difficulty stuck straight fire usual aware curve victory</li>
                                    <li>Lost many century free desert unknown transportation chicken doing tie never catch gas dish interior pupil exact trail pie military hung tape ball it</li>
                                    <li>Guess whole buried vertical our brother choice save farther stopped do soon stove cap sum ill forest milk successful angry through proper six shorter</li>
                                </ul>
                            </section>
                            {/* tab section */}
                            <section className="crurses-drawer-section">
                                <h3 className="description-common-title">Course content</h3>
                                <div className="courses-drawer-wraper">
                                    <p className="drawer-length">10 sections • 84 lectures • 3h 38m total length</p>
                                    <div className="courses-drawer-inner">
                                        <div className="single-courses-drawer expended">
                                            <div className="drawer-title">
                                                <div className="main-title">
                                                    <i className="fas fa-angle-down mr-2" /> Introduction
                                                </div>
                                                <div className="time">10 lecture • 2 min</div>
                                            </div>
                                            <div className="drawer-body">
                                                <p>
                                                    <i className="fas fa-tv" /> Conceptos básicos
                                                </p>
                                                <p>
                                                    <i className="fas fa-tv" /> Conceptos básicos
                                                </p>
                                            </div>
                                        </div>
                                        <div className="single-courses-drawer">
                                            <div className="drawer-title">
                                                <div className="main-title">
                                                    <i className="fas fa-angle-down mr-2" /> Kyle Gutierrez
                                                </div>
                                                <div className="time">10 lecture • 2 min</div>
                                            </div>
                                            <div className="drawer-body">
                                                <p>
                                                    <i className="fas fa-tv" /> Conceptos básicos
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* points section */}
                            <section className="points-section">
                                <h3 className="description-common-title">Requirements</h3>
                                <ul>
                                    <li>
                                        Grade attached present between tape fighting lamp rabbit trunk cow liquid stage hung put task strong without fireplace stop dog happened grass yesterday film
                                    </li>
                                    <li>
                                        Face cast today husband command ship grain doubt pencil missing characteristic him opinion differ different neighbor wing broke stranger they police double
                                        person around
                                    </li>
                                    <li>
                                        Daughter winter universe settlers bicycle exactly cold sitting planned slip selection forward certainly just long its rubbed deep national prepare whale empty
                                        progress hour
                                    </li>
                                </ul>
                            </section>
                            {/* description */}
                            <section className="description-section">
                                <h3 className="description-common-title">Description</h3>
                                <div>
                                    <p>Los ganchos más potentes generan reacciones en los lectores. En este curso aprenderás a conectar al lector con tu obra para captar y mantener la atención.</p>
                                    <strong>QUÉ APRENDERÁS</strong>
                                    <p>Cómo crear ganchos consistentes para mantener al lector motivado.</p>
                                    <strong>BENEFICIOS</strong>
                                    <p>
                                        Una vez que hayas finalizado este curso utilizarás el poder de los ganchos en tu propio beneficio. Serás capaz de crear historias motivadoras, capaces de
                                        despertar reacciones en los lectores y mantenerlos leyendo hasta el final de tu novela.
                                    </p>
                                    <strong>QUÉ APRENDERÁS</strong>
                                    <p>Cómo crear ganchos consistentes para mantener al lector motivado.</p>
                                    <strong>BENEFICIOS</strong>
                                    <p>
                                        Una vez que hayas finalizado este curso utilizarás el poder de los ganchos en tu propio beneficio. Serás capaz de crear historias motivadoras, capaces de
                                        despertar reacciones en los lectores y mantenerlos leyendo hasta el final de tu novela.
                                    </p>
                                    <strong>QUÉ APRENDERÁS</strong>
                                    <p>Cómo crear ganchos consistentes para mantener al lector motivado.</p>
                                    <strong>BENEFICIOS</strong>
                                    <p>
                                        Una vez que hayas finalizado este curso utilizarás el poder de los ganchos en tu propio beneficio. Serás capaz de crear historias motivadoras, capaces de
                                        despertar reacciones en los lectores y mantenerlos leyendo hasta el final de tu novela.
                                    </p>
                                </div>
                            </section>
                            {/* point section */}
                            <section className="points-section">
                                <h3 className="description-common-title">Who this course is for:</h3>
                                <ul>
                                    <li>Personas interesadas en empezar a aprender sobre el mundo del machine learning o aprendizaje automático</li>
                                    <li>Television some numeral lot on pass victory widely tight many bean indicate fire dangerous passage mark driving run cast applied music shelter spring box</li>
                                    <li>Number earn hang firm coast general ability brick volume anybody signal character physical rest goes jet being sold bad ahead principal bill hardly gone</li>
                                    <li>
                                        Gently somewhere settle quiet complete cow love exactly donkey dot generally appearance source measure down point thirty basket wave leather second promised
                                        scientist depend
                                    </li>
                                </ul>
                            </section>
                            {/* teacher section */}
                            <section className="instructor-section">
                                <h3 className="description-common-title">Instructor</h3>
                                <a href="#" className="ins-name">
                                    Antony lorings
                                </a>
                                <p className="ins-tag">Author</p>
                                <div className="ins-info">
                                    <div>
                                        <Image src={course?.image} width={300} height={300} alt="course" />
                                    </div>
                                    <div className="icon-text">
                                        <p>
                                            <i className="fas fa-star" /> 4.5 Instructor Rating
                                        </p>
                                        <p>
                                            <i className="fas fa-award" /> 21,522 Reviews
                                        </p>
                                        <p>
                                            <i className="fas fa-users" /> 201,708 Students
                                        </p>
                                        <p>
                                            <i className="fas fa-play-circle" /> 20 Courses
                                        </p>
                                    </div>
                                </div>
                                <div className="ins-des">
                                    <p>
                                        <b>Antony lorings</b> es una empresa de informática especializa en software, con personal titulado en Ingeniería Informática con más de 20 años de experiencia
                                        en el desarrollo de software.
                                    </p>
                                </div>
                            </section>
                            {/* courses rating */}
                            <section className="courses-rating-section">
                                <h3 className="description-common-title">Happy students</h3>
                                <div className="courses-rating-wraper">
                                    <div className="single-rating">
                                        <div className="rating-header">
                                            <p>hb</p>
                                            <div>
                                                <p className="rater-name">Herbert Gibson</p>
                                                <div>
                                                    <Rate className="[&_*]:text-xs [&_*]:!text-orange-400 ml-3" value={4.5} />
                                                    <span className="month">10 month ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rating-des">
                                            <p>Este curso de escritura de libros fue fantástico. Aprendí mucho y ha mejorado enormemente mis habilidades de escritura. ¡Altamente recomendado!</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="courses-right-bar-wraper">
                    <div className="courses-right-bar">
                        <a href="#" className="courses-preview-img-wrap">
                            <div className="courses-preview-img">
                                <div className="shadow" />
                                <Image src={course?.image} width={300} height={300} alt="course" />
                                <span>
                                    <Play size={25} />
                                </span>
                                <p className="prev-text">Preview course</p>
                            </div>
                        </a>
                        <div className="courses-details">
                            <div className="new-courses-price">
                                <h3>${course?.price}</h3>
                                <p className="cross">$39.99</p>
                                <p className="off">63% off</p>
                            </div>

                            <div className="course-buy-buttons">
                                <AddToCartBtn
                                    text="Add to cart"
                                    cartItem={course}
                                    icon={<ShoppingBasket size={18} />}
                                    className="bg-blue-500 [&_*]:!text-white flex items-center justify-center gap-2 hover:bg-blue-700"
                                />

                                <button className="btn buy-now-btn">Buy now</button>
                            </div>
                            <div className="courses-include">
                                <p className="title">This course includes:</p>
                                <p>
                                    <i className="fas fa-desktop" /> 3.5 hours on-demand video
                                </p>
                                <p>
                                    <i className="far fa-file" /> 1 article
                                </p>
                            </div>
                            <div className="courses-footer-links">
                                <a href="#">Share</a>
                                <a href="#">Gift this course</a>
                                <a href="#">Apply cupon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursDetails;
