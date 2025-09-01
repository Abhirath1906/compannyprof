"use client"
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout, Flex, Divider, Card, Typography, Row, Col, Spin } from "antd";
import { CodeOutlined, RadarChartOutlined, AntDesignOutlined } from "@ant-design/icons";
import { FacebookOutlined, InstagramOutlined, XOutlined } from "@ant-design/icons";
import "../globals.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Pagination, Autoplay } from "swiper/modules";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// import { Content } from 'next/font/google';


const { Content } = Layout

export default function Service() {

    const [loading, setloading] = useState(true)

    useEffect(() => {
        const Timer = setTimeout(() => setloading(false), 1500)
        return () => clearTimeout(Timer)

    }, [])

    useEffect(() => {

        if (!loading) {
            gsap.registerPlugin(ScrollTrigger);
            gsap.fromTo(".layoutt", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })
            gsap.fromTo(".firstText", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })
            gsap.fromTo(".swiper", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 })


            gsap.fromTo(".title", { x: -100, opacity: 0 }, {
                x: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                    trigger: ".title",

                    //   markers: true,
                    start: "-300px 100px",
                    end: "-200px 100px"
                }
            })

            gsap.fromTo(".isi", { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.2, scrollTrigger: {
                    trigger: ".isi",

                    // markers: true,
                    start: "-400px 100px",
                    end: "-200px 100px"
                }
            })


            gsap.fromTo(".fashion", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2 })


            gsap.fromTo(".divService .ant-card", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.2, stagger: {
                    amount: 1,
                    grid: "auto",
                    // from: "center"
                }, scrollTrigger: {
                    trigger: ".isi",
                    // markers:true,
                    start: "300 100"


                }
            })
            gsap.fromTo(".footerr", { y: 100, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1.3, scrollTrigger: {
                    trigger: ".footerr"
                }
            })


        }
    }, [gsap, loading])


    if (loading) {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#cbc7c7"
            }}>
                <Spin size="large" tip="Loading..." style={{ color: "black" }} />
            </div>
        )
    }

    return (
        <div className="pageBackground">




            <div className='firstText' style={{
                display: "flex", marginTop: "50px", fontSize: "50px", justifyContent: "center"
                , marginTop: "90px", padding: "50px"

            }}>
                <p><span style={{ color: "#7a6200", }}>Our </span> Services</p>
            </div>


            <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }} className='fashion'>

                <Image style={{ border: "solid black 3px", borderRadius: "10px", position: "absolute" }} src="/fashionPic2.jpg" width={1000} height={10}
                    className='fashion2' />
            </div>



            <div style={{ display: "flex", gap: "100px", justifyContent: "center", marginTop: "600px" }} className='divService'>



                <Card className='cardService' >
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <CodeOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "70px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />
                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            Website <span style={{ color: "#7a6200" }}><br />Development</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Pembuatan website profesional<br />
                        mulai dari landing page,<br /> company profile, hingga portal<br />
                        khusus sesuai kebutuhan.
                    </Typography>
                </Card>
                <Card className='cardService'>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <RadarChartOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "55px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />
                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            E-Commerce <span style={{ color: "#7a6200" }}><br />Development</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Pembuatan toko online<br />
                        dengan fitur keranjang,<br />
                        pembayaran online,<br />
                        dan integrasi pengiriman.

                    </Typography>
                </Card>
                <Card className='cardService'>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <AntDesignOutlined style={{
                            backgroundColor: "black", color: "white", fontSize: "40px", position: "absolute",
                            marginLeft: "50px", marginTop: "-50px", borderRadius: "10px", padding: "5px"
                        }} />

                        <Typography.Text style={{ fontSize: "25px", marginTop: "10px" }}>
                            UI/UX <span style={{ color: "#7a6200" }}><br />Design</span>
                        </Typography.Text>
                    </div>
                    <Divider />
                    <Typography>
                        Desain tampilan<br />
                        website yang modern,<br />
                        responsif, dan mudah<br />
                        digunakan.

                    </Typography>
                </Card>

            </div>




            <Layout className='layoutt' style={{ backgroundColor: "black" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Image style={{ marginLeft: "30px" }} src="/logo.png" width={100} height={100} alt="ccc" />
                    <p style={{ fontWeight: "bold", fontSize: "30px" }}>
                        <span style={{ color: "#7a6200" }}> SILVER</span>  <span style={{ color: "#c8c4c4" }}> SPURS
                        </span></p>

                    <div className='isilayout' style={{ display: "flex", marginLeft: "550px", fontWeight: "700" }}>

                        <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                        <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
                        <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                        <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
                    </div>


                </div>
            </Layout>


            <div className='footerr' style={{
                display: "flex",
                backgroundColor: "black",
                marginTop: "150px",
                padding: "80px"

            }}>

                <div>
                    <Typography className='footerText' style={{ color: "white", fontSize: "30px", fontWeight: "700" }}>
                        Web fashion,<br />
                        Make idea to<br />
                        reality
                    </Typography>
                </div>

                <div style={{ marginLeft: "100px", marginTop: "5px", display: "flex", }}>
                    <div className='isiFooter' style={{ display: 'flex', gap: "200px" }} >



                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Companny
                            </Typography.Text>
                            <div>
                                <Typography.Text style={{
                                    color: "white", fontSize: "20px", fontWeight: "200", display: "flex",
                                    flexDirection: "column"
                                }}>
                                    <Link href="/" style={{ color: "#c8c4c4" }}>Home</Link>
                                    <Link href="/Service" style={{ color: "#c8c4c4" }}>Service</Link>
                                    <Link href="/Portofolio" style={{ color: "#c8c4c4" }}>Portofolio</Link>
                                </Typography.Text>
                            </div>

                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Location
                            </Typography.Text>

                            <div>
                                <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "200" }}>
                                    Indonesia,<br />
                                    Jakarta<br />
                                    Green Lake City

                                </Typography.Text>
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <Typography.Text style={{ color: "white", fontSize: "20px", fontWeight: "500" }}>
                                Contact us
                            </Typography.Text>


                            <div>
                                <Typography style={{ color: "white", fontSize: "20px", fontWeight: "200" }}>
                                    <div style={{ fontSize: "20px", display: "flex", gap: "20px", marginTop: "10px" }}>
                                        <a className='linkApp' href="https://www.facebook.com/?locale=id_ID" target="_blank" rel="noopener noreferrer">
                                            <FacebookOutlined />
                                        </a>
                                        <a className='linkApp' href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <InstagramOutlined />
                                        </a>
                                        <a className='linkApp' href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                            <XOutlined />
                                        </a>
                                    </div>
                                    <Link href="/Contact" style={{ color: "#c8c4c4" }}>Contact</Link>
                                </Typography>
                            </div>
                        </div>

                    </div>






                </div>

            </div>

        </div>
    )

}