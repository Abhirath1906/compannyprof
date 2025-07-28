"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Input, Button } from "antd";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'




export default function Service() {

    const [TheSearch, setTheSearch] = useState('')

    const Result = () => {
        alert(TheSearch)
    }
    const swiperRef = useRef();

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
        gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


        gsap.fromTo(".title", { x: -100, opacity: 0 }, {
            x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                trigger: ".title",
                scrub: true,
                //   markers: true,
                start: "-300px 100px",
                end: "-200px 100px"
            }
        })

        gsap.fromTo(".isi", { y: 50, opacity: 0 }, {
            y: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                trigger: ".isi",
                scrub: true,
                // markers: true,
                start: "-400px 100px",
                end: "-200px 100px"
            }
        })
    },[gsap])

    return (
        <div className="pageBackground">



            <Layout className='layoutt' style={{ backgroundColor: "black" }}>
                <Flex align="center">
                    <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                        <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
                        </span></p>

                    <div style={{ display: "flex", marginLeft: "70px", gap: "20px", fontSize: "15px" }}>

                        <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                        <Link href="/Service" style={{ color: "#c8c4c4" }}>Our service</Link>
                        <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                    </div>

                    <div style={{ marginLeft: "150px", }}>
                        <Input
                            value={TheSearch}
                            onChange={(e) => setTheSearch(e.target.value)}
                            style={{ width: "400px", marginRight: "20px" }} placeholder="type a text" />
                        <Button onClick={Result}>Enter</Button>
                    </div>
                </Flex>
            </Layout>

            <div style={{ fontSize: "60px", marginTop: "150px", marginLeft: "50px" }}>


                <div style={{ display: "flex" }}>

                    <div className='firstText' style={{
                        display: "flex", marginTop: "50px", fontSize: "80px",
                        marginLeft: "100px"
                    }}>
                        <p><span style={{ color: "#7a6200", marginRight: "340px" }}>Our <br /></span> Service</p>
                    </div>




                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 2500 }}
                        loop={true}
                        className="swiper"
                        style={{
                            height: "300px",
                            width: "500px",
                            marginRight: "100px"
                        }}
                    >
                        <SwiperSlide>
                            <Image src='/fash1.avif' width={700} height={300} alt="1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/fash2.avif' width={700} height={300} alt="2" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/fash3.avif' width={700} height={300} alt="3" />
                        </SwiperSlide>
                    </Swiper>

                </div>




            </div>

            <div className='title' style={{
                display: "flex", marginTop: "200px", fontSize: "30px", gap: "300px",
                marginLeft: "130px"
            }}>
                <p>Website <span style={{ color: "#7a6200" }}><br />Development</span></p>
                <p>E-Commerce <span style={{ color: "#7a6200" }}><br />Development</span></p>
                <p>UI/UX <span style={{ color: "#7a6200" }}><br />Design</span></p>
            </div>

            <div className='isi' style={{ display: "flex", gap: "100px", marginLeft: "130px", gap: "170px", marginTop: "50px" }}>

                <div className='cont' style={{
                    display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
                    padding: "30px", borderRadius: "10px"
                }}>

                    <p>Pembuatan website profesional<br />
                        mulai dari landing page,<br /> company profile, hingga portal<br />
                        khusus sesuai kebutuhan.</p>

                </div >

                <div className='cont' style={{
                    display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
                    padding: "30px", borderRadius: "10px"
                }}>

                    <p>Pembuatan toko online<br /> dengan fitur keranjang,<br /> pembayaran online,<br /> dan integrasi pengiriman.
                    </p>

                </div>

                <div className='cont' style={{
                    display: "flex", flexDirection: "column", alignItems: "center", border: "solid black 3px",
                    padding: "30px", borderRadius: "10px"
                }}>

                    <p>Desain tampilan<br /> website yang modern,<br /> responsif, dan mudah<br /> digunakan.</p>

                </div>

            </div>


            <div style={{
                display: "flex", justifyContent: "center", fontSize: "20px",
                backgroundColor: "black", marginTop: "150px"
            }}>

                <p style={{ color: 'white' }}>...</p>
            </div>
        </div>
    )

}